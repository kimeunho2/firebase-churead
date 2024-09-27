// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcEn89RBhrBM0lAANrOqajcnfvytP76tA",
  authDomain: "chureads-72242.firebaseapp.com",
  projectId: "chureads-72242",
  storageBucket: "chureads-72242.appspot.com",
  messagingSenderId: "917010083098",
  appId: "1:917010083098:web:ce4bc6bf01e08349c7d0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 우리 프로젝트에 대한 인증 서비스를 사요겠다라는 의미
export const auth = getAuth(app)

// 우리 프로젝트에 대한 데이터베이스 서비스를 사용하겠다라는 의미1
export const db = getFirestore(app)