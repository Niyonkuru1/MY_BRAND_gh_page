
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
import {getFirestore, collection, 
  addDoc, deleteDoc, doc,
  query, where, onSnapshot, serverTimestamp
  , getDoc,getDocs
 } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAMXuF7n_5lWaRI4M51Mb9aqLAMwjSOxY",
    authDomain: "admin-demo-7d3c5.firebaseapp.com",
    projectId: "admin-demo-7d3c5",
    storageBucket: "admin-demo-7d3c5.appspot.com",
    messagingSenderId: "961539757601",
    appId: "1:961539757601:web:c13ad8d2ecf4d1840bf560"
  };
  // const auth = getAuth(app)

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const ref = collection(db,"admin-page")
   
  // ADDING the datas into database
  const addPost = document.querySelector("#posti")
  addPost.addEventListener("submit", (e) => {
      e.preventDefault()
      addDoc(ref, {
        Title: addPost.title.value,
        Body: addPost.body.value,
        CreatedAt: serverTimestamp(),
        
    })
    .then(() => {
        console.log("it has been done")
        addPost.reset()
    })
  })

  // DELETING the datas from db
  // const deleteBookForm = document.querySelector("#delete")
  //    deleteBookForm.addEventListener('submit', (e) => {
  //        e.preventDefault();
  //        const docRef = doc(db, "admin", deleteBookForm.id.value)
    
  //        deleteDoc(docRef).then(()=>{
  //           deleteBookForm.reset()
  //       })
  //    })

  //   // Real time database
  //     onSnapshot(ref, (snapshor)=>{
  //       let data = []
  //     snapshor.docs.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id})
  //     })
  //     let ar = [];
  //     for (let g=0; g < data.length; g++){
  //       ar.push(data[g]["Title"]);
  //       console.log(ar)
  //     }
  //     })
      // console.log(ar)
