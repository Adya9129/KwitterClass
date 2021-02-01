var firebaseConfig = {
       apiKey: "AIzaSyA92NBWkkhhHx07ZF-4OvLPx2Ssoi_NbZM",
       authDomain: "kwitter-ac8f6.firebaseapp.com",
       databaseURL: "https://kwitter-ac8f6-default-rtdb.firebaseio.com",
       projectId: "kwitter-ac8f6",
       storageBucket: "kwitter-ac8f6.appspot.com",
       messagingSenderId: "926398254074",
       appId: "1:926398254074:web:a389527b4a2da15a8b3243",
       measurementId: "G-5L8KJT2WYC"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  

user_name = localStorage.getItem("user_name");
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
            }); 

}
getData();

function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
}     
function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}