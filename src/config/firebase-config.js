import firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "hostel-allocation-assignment.firebaseapp.com",
    projectId: "hostel-allocation-assignment",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "642334224016",
    appId: "1:642334224016:web:ac21386c59279e484cf215",
    measurementId: "G-D09405J63D"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;