import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA9o4lNshDZ6lAAiz4WDn1fak7OX3U2vbc",
    authDomain: "fir-sandbox-bb6c9.firebaseapp.com",
    projectId: "fir-sandbox-bb6c9",
    storageBucket: "fir-sandbox-bb6c9.appspot.com",
    messagingSenderId: "233030894653",
    appId: "1:233030894653:web:9464000f6a2708bc1d5654",
    measurementId: "G-66PGJNF9YR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)

  