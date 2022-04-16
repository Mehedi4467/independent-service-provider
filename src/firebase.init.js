// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDA3W0LLKMXh1_3yCNCDQj2SdJeel8YH8",
    authDomain: "gym-zone-82f25.firebaseapp.com",
    projectId: "gym-zone-82f25",
    storageBucket: "gym-zone-82f25.appspot.com",
    messagingSenderId: "915451583180",
    appId: "1:915451583180:web:4a2dfd5d3bf258c46cc069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;