import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkDdRoJHXMO-3edPZ1agGiunYOPX8qBec",
  authDomain: "fir-blog-3cea3.firebaseapp.com",
  projectId: "fir-blog-3cea3",
  storageBucket: "fir-blog-3cea3.appspot.com",
  messagingSenderId: "406765239565",
  appId: "1:406765239565:web:fef66c2570c74cf3058444",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
