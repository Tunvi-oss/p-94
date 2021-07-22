
var firebaseConfig = {
      apiKey: "AIzaSyBUO6Cqvi9ykXSDN-Ya71eSLvM1gURkin0",
      authDomain: "kwitter-77cfa.firebaseapp.com",
      databaseURL: "https://kwitter-77cfa-default-rtdb.firebaseio.com",
      projectId: "kwitter-77cfa",
      storageBucket: "kwitter-77cfa.appspot.com",
      messagingSenderId: "463759310359",
      appId: "1:463759310359:web:51bbad45c297372fcca652",
      measurementId: "G-MJX44JPW58"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
