import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWLpgnAGpTKykwlKskR8EU9p11c9holoo",
    authDomain: "spotify-7cb54.firebaseapp.com",
  projectId: "spotify-7cb54",
   storageBucket: "spotify-7cb54.appspot.com",
     messagingSenderId: "789398130990",
   appId: "1:789398130990:web:e90300f72293f10dd8aabf"
 };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);
export default firebase;