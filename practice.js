const firebaseConfig = {
    apiKey: "AIzaSyBglyErFKeDVIRoV_EyGkBUMvkNCPZCN5c",
    authDomain: "kwitter-47da9.firebaseapp.com",
    databaseURL: "https://kwitter-47da9-default-rtdb.firebaseio.com",
    projectId: "kwitter-47da9",
    storageBucket: "kwitter-47da9.appspot.com",
    messagingSenderId: "203052268036",
    appId: "1:203052268036:web:c63a56e449c75f8a189351",
    measurementId: "G-5ZR6RC10TD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
    
}