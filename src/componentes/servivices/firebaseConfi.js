import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBFdWAQKyY_WXUG8FJ3PVLG6FPDK3aO7fY",
  authDomain: "projeto-chat-64cd6.firebaseapp.com",
  projectId: "projeto-chat-64cd6",
  storageBucket: "projeto-chat-64cd6.appspot.com",
  messagingSenderId: "754116765349",
  appId: "1:754116765349:web:d3d763e739c097a86a8f4c",
  measurementId: "G-JBG3SB61Z4"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default  db