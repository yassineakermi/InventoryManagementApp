import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXiuZ5SUmjPNOWSE3zYLvS_KmG9HIZl8s",
  authDomain: "inventory-management-762d8.firebaseapp.com",
  projectId: "inventory-management-762d8",
  storageBucket: "inventory-management-762d8.appspot.com",
  messagingSenderId: "1065410034588",
  appId: "1:1065410034588:web:f52accc5ad82aeab46a659",
  measurementId: "G-RM01ZD5QHT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
