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
const db = firebase.firestore();
const database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let currentUser = user.email
    db.collection('users').doc(currentUser).get().then(function(standardSearch) {
      let yourStandard = standardSearch.data().standard
      db.collection('standards').doc(yourStandard).get().then(function(standardFound) {
        // console.log(standardFound.data())
        $.each(standardFound.data(), function(key, value){
          let buildingStandardTitle = key
          let buildingStandard = value
          let where = Object.keys(buildingStandard) // where the location of the work is
          let what = Object.values(buildingStandard) // what the work is to be done

          $('<div>')
            .addClass('card')
            .appendTo($('#standard'))

          for (let i = 0; i < where.length; i++) {
            $('<div>')
              .addClass('card-header')
              .text(where[i])
              .appendTo($('.card'))
            $('<div>')
              .addClass('card-body')
              .appendTo($('.card'))      
          }

          // for(let j = 0; j < what.length; j++) {
          //   console.log(Object.keys(what[i]))
          // }
          
        })
      })
    })
  } else {
    console.log('not logged in')
  }
})
