import  firebase  from "firebase/app";
import  "firebase/firestore";
import 'firebase/auth';



const firebaseConfig = {

    apiKey: "AIzaSyBf3jjVlMlw-S1eObtIoQGh0vgSSiWAa_U",
  
    authDomain: "react-apps-9cf4a.firebaseapp.com",
  
    projectId: "react-apps-9cf4a",
  
    storageBucket: "react-apps-9cf4a.appspot.com",
  
    messagingSenderId: "336723869095",
  
    appId: "1:336723869095:web:9484ada01bea31e4e68a82"
  
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }