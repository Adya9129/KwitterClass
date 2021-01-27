var firebaseConfig = {
       apiKey: "AIzaSyBgHMpcug164BJBYrn9NaudPwBQy2nuLDA",
        authDomain: "projectt-94.firebaseapp.com",
         databaseURL: "https://projectt-94-default-rtdb.firebaseio.com",
          projectId: "projectt-94",
           storageBucket: "projectt-94.appspot.com",
           messagingSenderId: "287047213568", 
           appId: "1:287047213568:web:6db5ee6de94d4765712ee5"
       }; 
       // Initialize Firebase 
       firebase.initializeApp(firebaseConfig);
  

user_name = localStorage.getData("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
function addRoom() {
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ 
       purpose : "adding room name" 
      });
  localStorage.setItem("room_name", room_name); 
  window.location = "kwitter_page.html";
 }
 function getData() {
        firebase.database().ref("/").on('value', 
        function(snapshot) { 
       document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
               childKey = childSnapshot.key;
                Room_names = childKey;
                 console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                   document.getElementById("output").innerHTML += row; 
                  }); 
            }); }
             getData();