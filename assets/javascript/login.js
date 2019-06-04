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

 firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

 //Get elements
 const emailTxt = $('#emailTxt')
 const passTxt = $('#passTxt')
 const btnLogin = $('#btnLogin')
 const btnSignUp = $('#btnSignUp')
 const btnLogOut = $('#btnLogOut')
 const database = firebase.database()

 //add login event
 btnLogin.on('click', function() {
   const user = emailTxt.val()
   const pass = passTxt.val()
   const auth = firebase.auth();
   // sign in
   const promise = auth.signInWithEmailAndPassword(user, pass);
   promise.catch(function (err) {
     console.log(err.message)
   })

 })
 // sign up
 btnSignUp.on('click', function() {
   const user = emailTxt.val()
   const pass = passTxt.val()
   const auth = firebase.auth();
   // sign in
   const promise = auth.createUserWithEmailAndPassword(user, pass);
   promise.catch(function (err) {
     console.log(err.message)
   })

 })
 
 //log out
 btnLogOut.on('click', function() {
   firebase.auth().signOut();
 })

 firebase.auth().onAuthStateChanged(function(firebaseUser) {
   if (firebaseUser) {
     console.log(firebaseUser)
     console.log('logged in')

     location.href = 'home-coordinator.html'
   } else {
     console.log('not logged in')
   }
 })

