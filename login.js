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
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const day = now.getDate();
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
      const year = now.getFullYear();

      const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;
      let user = auth.currentUser;
      set(ref(db, 'users/' + user.uid), {
        email : email,
        password : password,
        last_login : formattedDate
      });
      alert("done!");
    })
    .catch(function(error){
      alert(error.message);
    });
});