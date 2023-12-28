// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// for checking
// console.log("environment variable: ", import.meta.env.VITE_PASS); // 25.12.23

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// // const firebaseConfig = {
//   apiKey: "AIzaSyD-swaihdZdyEwEArDBfF8NZhO0MMlYZM4",
//   authDomain: "dragon-news-6064b.firebaseapp.com",
//   projectId: "dragon-news-6064b",
//   storageBucket: "dragon-news-6064b.appspot.com",
//   messagingSenderId: "266430926004",
//   appId: "1:266430926004:web:380108997b8709d2ebdbe1"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
