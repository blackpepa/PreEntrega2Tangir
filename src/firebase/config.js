import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFUcjh5w-dAiVJLS93FKfJx53Krk6yjE",
  authDomain: "kawaii-store-app-v1.firebaseapp.com",
  projectId: "kawaii-store-app-v1",
  storageBucket: "kawaii-store-app-v1.appspot.com",
  messagingSenderId: "14712442691",
  appId: "1:14712442691:web:4c890f0e725d3ae047a9f6"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore =() =>{
    return firebase.firestore(app)
}