import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyANumzF72BC_zjQ5cz8iyG35oJK1jNmhBs",
  authDomain: "demo05-3d687.firebaseapp.com",
  projectId: "demo05-3d687",
  storageBucket: "demo05-3d687.firebasestorage.app",
  messagingSenderId: "50186726637",
  appId: "1:50186726637:web:9ffa8a9d485ec7a36430e4"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
