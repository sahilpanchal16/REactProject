// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/getDatabase";



const firebaseConfig = {
  apiKey: "AIzaSyD43A2B1vSuUxjxqziPPnW6sqqs8irz7VY",
  authDomain: "fir-5085c.firebaseapp.com",
  databaseURL: "https://fir-5085c-default-rtdb.firebaseio.com",
  projectId: "fir-5085c",
  storageBucket: "fir-5085c.appspot.com",
  messagingSenderId: "1062168091705",
  appId: "1:1062168091705:web:acb7ae0426322417e1c1e8",
  measurementId: "G-86LB19T4WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
export default app;