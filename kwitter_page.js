//YOUR FIREBASE LINKS
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
firebase.initializeApp(firebaseConfig);
userName=localStorage.getItem("User name");
roomName=localStorage.getItem("roomName");
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("User name");
      localStorage.removeItem("roomName");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
      getData();
}
function updateLike(message_id){
      console.log("clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(roomName).child(message_id).update({
            like:updated_likes
      });
}