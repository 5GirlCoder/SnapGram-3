/* This is the js for 2nd screen */ 

var firebaseConfig = {
  apiKey: "AIzaSyBtPH4NWNXTHmnnDXWVo4SQ5iutQ_fD9Ac",
  authDomain: "snapgram-dd4e6.firebaseapp.com",
  databaseURL: "https://snapgram-dd4e6-default-rtdb.firebaseio.com",
  projectId: "snapgram-dd4e6",
  storageBucket: "snapgram-dd4e6.appspot.com",
  messagingSenderId: "32567160224",
  appId: "1:32567160224:web:324f4910a7e0212ccf48c5"
};
firebase.initializeApp(firebaseConfig);
    
    var UserName = localStorage.getItem("UserName");
    console.log(UserName);
    document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName; 

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log(Room_names);
 row = "<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();

function AddRoom()
{
RoomName = document.getElementById("RoomName Input").value;
firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
localStorage.setItem("Room_Name", RoomName);
console.log(RoomName);
window.location="SnapGramRoom.html";
}

function redirect(name)
{
window.location= SnapGramRoom.html;
console.log(name);
}