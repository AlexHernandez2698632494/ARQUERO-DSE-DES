import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMnOXwp1gwOTqEk0bgmLxqkOZM9Wum-PM",
    authDomain: "arquero-7ac82.firebaseapp.com",
    projectId: "arquero-7ac82",
    storageBucket: "arquero-7ac82.appspot.com",
    messagingSenderId: "1061877921990",
    appId: "1:1061877921990:web:5a6324e1ea097ed6737fc7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Inicializar Firestore
  const db = getFirestore(app);
  
  export { db };