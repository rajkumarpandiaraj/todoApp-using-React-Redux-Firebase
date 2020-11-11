import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAFytMhNy-LMSJbP_-8b_HeD9cLoTTnPmY",
    authDomain: "todo2-729b0.firebaseapp.com",
    databaseURL: "https://todo2-729b0.firebaseio.com",
    projectId: "todo2-729b0",
    storageBucket: "todo2-729b0.appspot.com",
    messagingSenderId: "857405642684",
    appId: "1:857405642684:web:09ee7309ebc5d0979ebdb9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase