// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBN-O04fLALlyH9JmO2BwmeETuZ5fIzy-E",
  authDomain: "purpleportal-5ce81.firebaseapp.com",
  databaseURL: "https://purpleportal-5ce81.firebaseio.com",
  projectId: "purpleportal-5ce81",
  storageBucket: "purpleportal-5ce81.appspot.com",
  messagingSenderId: "909418896288",
  appId: "1:909418896288:web:0fda4560cee968fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(firebaseUser) {
  if (firebaseUser) {
    console.log('welcome')
  } else {
    console.log('not logged in')
  }
})
