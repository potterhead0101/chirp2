var firebaseConfig = {
      apiKey: "AIzaSyBJ0ZsVIMzm0VrFbVmdBluEGUCG3aEy0E0",
      authDomain: "chirp-d9671.firebaseapp.com",
      databaseURL: "https://chirp-d9671-default-rtdb.firebaseio.com",
      projectId: "chirp-d9671",
      storageBucket: "chirp-d9671.appspot.com",
      messagingSenderId: "278888501836",
      appId: "1:278888501836:web:03bc56969276dad47d1ae9",
      measurementId: "G-G8QVRN58W9"
    };

firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
msg= document.getElementById("msg").value
firebase.database().ref(room_name).push
({
 name:user_name,
 message: msg,
 like: 0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
