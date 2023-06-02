import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCEpCO6pHVcSn5BoMkq2SZ8NrH2y2LILGQ",
  authDomain: "todo-app-auth-f3d72.firebaseapp.com",
  projectId: "todo-app-auth-f3d72",
  storageBucket: "todo-app-auth-f3d72.appspot.com",
  messagingSenderId: "51285499420",
  appId: "1:51285499420:web:43ff2f86d7a018346649d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);