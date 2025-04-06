import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpzXwDniTAl1mjQsTDnoyg3fR9hxS5ipg",
  authDomain: "hn-prd-hmc.firebaseapp.com",
  projectId: "hn-prd-hmc",
  storageBucket: "hn-prd-hmc.firebasestorage.app",
  messagingSenderId: "422765963438",
  appId: "1:422765963438:web:d58c4c6154f62dceb6a53f",
  measurementId: "G-KZPC2M8CHC",
};

export const firebaseApp = initializeApp(firebaseConfig);
