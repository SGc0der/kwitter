function addUser(){
    userName=document.getElementById("userName").value;
    localStorage.setItem("User name",userName);
    console.log("User name: "+userName);
    window.location="kwitter_room.html";
}