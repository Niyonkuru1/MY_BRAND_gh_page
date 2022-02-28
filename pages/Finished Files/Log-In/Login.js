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

//signing up a user
/*   const signUpForm = document.querySelector("#signUp")
//   signUpForm.addEventListener('submit', (e) => {
//       e.preventDefault()
//       const email = signUpForm.email.value;
//       const password = signUpForm.password.value;
//       createUserWithEmailAndPassword(auth, email, password).
//       then((cred)=>{
//           console.log("User created: ", cred.user)
//           signUpForm.reset()
//       })
//       .catch((err) =>{
//          console.log("error is: ", err.message) 
//       })
//     })
*/

    // const logoutForm = document.querySelector("#logout")
    // logoutForm.addEventListener('click', (e) => {
    //     e.preventDefault()
    // signOut(auth)
    // .then(()=>{
    //     console.log("user signed out")
    // })
    // .catch((err)=>{
    //     console.log(err.message)
    // })
    // })




// login
const loginForm = document.querySelector("#login")
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value;
const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then((cred)=> {
        console.log("User loged in: ", cred.user)
        // generate_table();
        startAdminPage();
    })
    .catch((err)=> {
        console.log(err.message)
    })
})


//FUNCTION TO ADD CONTINUE BUTTON

function startAdminPage() {
    window.location.href = '../../admin/posts/index.html';
}
function generate_table() {
    // get the reference for the body
    let button = document.createElement("button");
    let parentRef = document.querySelector('.parent-box');
    let anchor = document.createElement("a");
    anchor.setAttribute('href', '../../admin/posts/index.html');
    anchor.innerHTML = "Continue";
    button.className = "btn parentRight";
    button.append(anchor);
    // parentRef.append(button);
      }

      let logout = document.querySelector(.cont);
      let button = document.createElement(".cont");
      let anch = document.createElement ('a');
      anch.innerHTML = 'Logout';
      button.append(anch);
      logout.append(button);
    //   anch.setAttribute('href',)


      // // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');


     





