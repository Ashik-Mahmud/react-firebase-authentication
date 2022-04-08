// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePcEEjf-blExEpNeET5HB4uAfCewfL_E",
  authDomain: "auth-blog-app-9ce9a.firebaseapp.com",
  projectId: "auth-blog-app-9ce9a",
  storageBucket: "auth-blog-app-9ce9a.appspot.com",
  messagingSenderId: "645781270230",
  appId: "1:645781270230:web:9008fcf5eb4bba3fcde377"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)