  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import {getFirestore, collection, 
    addDoc, deleteDoc, doc,
    query, where, onSnapshot,
    orderBy, getDoc,getDocs
   } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
import{getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAMXuF7n_5lWaRI4M51Mb9aqLAMwjSOxY",
    authDomain: "admin-demo-7d3c5.firebaseapp.com",
    projectId: "admin-demo-7d3c5",
    storageBucket: "admin-demo-7d3c5.appspot.com",
    messagingSenderId: "961539757601",
    appId: "1:961539757601:web:dcaae4af7ba93b5e0bf560"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const auth = getAuth(app)

// login
const loginForm = document.querySelector("#login")
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value;
const password = loginForm.password.value;
console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
    .then((cred)=> {
        console.log("User loged in: ", cred.user)
        // generate_table();
    window.location.href="../../admin/posts/indexPost.html";
        // startAdminPage();
    })
    .catch((err)=> {
        console.log(err.message)
    })
})


//FUNCTION TO ADD CONTINUE BUTTON
function startAdminPage() {
}
  // let logout = document.querySelector('.cont');
  //     let button = document.createElement(".cont");
  //     let anch = document.createElement ('a');
  //     anch.innerHTML = 'Logout';
  //     button.append(anch);
  //     logout.append(button);
    //   anch.setAttribute('href',)


     





