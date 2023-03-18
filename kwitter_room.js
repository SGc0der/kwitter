const firebaseConfig = {
  apiKey: "AIzaSyDlL094tHw2GYOJ_HSZPND6Q7BzB-hcvIM",
  authDomain: "kwitter-44dcc.firebaseapp.com",
  databaseURL: "https://kwitter-44dcc-default-rtdb.firebaseio.com",
  projectId: "kwitter-44dcc",
  storageBucket: "kwitter-44dcc.appspot.com",
  messagingSenderId: "928848782700",
  appId: "1:928848782700:web:3ef905b7f83a3a0ccf3f49",
  measurementId: "G-ERS71XK5VE"
};
username=localStorage.getItem("User name");
console.log(username);
document.getElementById("greet").innerHTML="Welcome"+username;
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+Room_names)
      row="<div class='roomName' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
  roomName=document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"adding room name"
  });
  localStorage.setItem("roomName",roomName);
  window.location="kwitter_page.html";
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("User name");
  localStorage.removeItem("roomName");
  window.location="index.html";
}
