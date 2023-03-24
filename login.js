import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { ref, getDatabase, set } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcIwVONO6_7Who1aiaIg6MAYTORo-jCOA",
  authDomain: "provasitodb-5851f.firebaseapp.com",
  databaseURL: "https://provasitodb-5851f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "provasitodb-5851f",
  storageBucket: "provasitodb-5851f.appspot.com",
  messagingSenderId: "129381431270",
  appId: "1:129381431270:web:f6f851f64f5fb09c558827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getDatabase();


const register = document.getElementById("register");
register.addEventListener('click', function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(function(){
      let user = auth.currentUser;
      set(ref(db, 'users/' + user.uid), {
        email : email,
        password : password,
        last_login : getDate()
      });
      alert("done!");
    })
    .catch(function(error){
      alert(error.message);
    });
});


const alreadySignout = document.getElementById('alreadySignout');
const notSignout = document.getElementById('notSignout');
const registerDiv = document.getElementById('registerDiv');
const loginDiv = document.getElementById('loginDiv');


alreadySignout.addEventListener('click', function(){
  registerDiv.classList.add('notDisplay');
  loginDiv.classList.remove('notDisplay');
});

notSignout.addEventListener('click', function(){
  registerDiv.classList.remove('notDisplay');
  loginDiv.classList.add('notDisplay');
});


function getDate(){
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
  const year = now.getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
}
