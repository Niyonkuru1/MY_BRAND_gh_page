// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import {getFirestore, collection, 
    addDoc, deleteDoc, doc,
    query, where, onSnapshot,
    orderBy, getDoc,getDocs
   } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"

    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAMXuF7n_5lWaRI4M51Mb9aqLAMwjSOxY",
    authDomain: "admin-demo-7d3c5.firebaseapp.com",
    projectId: "admin-demo-7d3c5",
    storageBucket: "admin-demo-7d3c5.appspot.com",
    messagingSenderId: "961539757601",
    appId: "1:961539757601:web:99007960d258cac90bf560"
  };

  // Initialize Firebas
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const ref = collection(db,"admin-page")

 // FETCHING ALL DATA FROM DATABASE AND DISPLAY THEM IN THE TABLE
 onSnapshot(ref, (snapshor)=>{
    let data = []
  snapshor.docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id})
  })
  // console.log(data);
  let ar = [];
  for (let g=0; g < data.length; g++){

      //Calling the generate table function to add the fetched data
      // into the DOM
    generate_table(data[g]["Title"], data[g]["id"], data[g]["CreatedAt"].toDate().toDateString(),
     data[g]["CreatedAt"].toDate().toLocaleTimeString())

    //Making the array to see the data in the console.
    ar.push(data[g]["Title"]);
  }
  // console.log(ar)
  })

//   FUNCTION TO ADD ROW BELOW THE TABLE
function generate_table(title,id, whenCreated, dateCreated) {
    // get the reference for the body
    let tableRef = document.getElementById('table').
    getElementsByTagName('tbody')[0];
    let dt = `<td>${whenCreated} at ${dateCreated}</td>
              <td><b>${title}</b></td>
              <td>${id}</td>
              <td><a href="create.html" class="edit">Update    </a><a href="#" class="delete">delete</a></td>`;
var newRow = tableRef.insertRow(tableRef.rows.length);
newRow.innerHTML = dt;
newRow.setAttribute("rowid",id)
      }
   
      //Reference to delete the document
    var itemList = document.getElementById('items');
    itemList.addEventListener('click', (e)=>{
      removeItem(e);
      // updateItem(e);
    });

    // FUNCTION TO DELETE ROW FROM DATABASE AND FROM DOM TREE
    function removeItem(er){
       //FOR DELETING ENTIRE ROW FROM THE TABLE (DOM)
      if(er.target.classList.contains('delete')){
        if(confirm('Warning, Are you sure to DELETE THE WHOLE BLOG?  Press OK to accept')){
          var tr = er.target.parentElement.parentElement;

          //To get the id of the post to delete
          let targetRowIdToDelete = er.target.parentElement.parentElement.getAttribute("rowid");
          itemList.removeChild(tr);
          console.log(targetRowIdToDelete);
           const docRef = doc(db, "admin-page", targetRowIdToDelete )
  
           //to delete the specified blog with id from the (DATABASE)
           deleteDoc(docRef).then(()=>{
             console.log("The blog deleted successfully from the database");
          })
          .catch((err)=>{
            console.log(`there was an error while deleting the blog from database: ${err}`);
          })
        }
      }
    }  

function updateItem(ere){
 if(ere.target.classList.contains('edit')){
     let targetRowIdToUpdate = ere.target.parentElement.parentElement.getAttribute("rowid");
      const docRef = doc(db, "admin-page", targetRowIdToUpdate);
      console.log(targetRowIdToUpdate)
      getADocument(targetRowIdToUpdate);
   }
 }

 async function getADocument(id){
   var ref = doc(db, "admin-page",id)
   const docSnapu = await getDoc(ref)
   console.log(docSnapu.data())

  //  const addPost = document.querySelector("#posti")
   console.log(docSnapu.data().Title);
   console.log(docSnapu.data().Body);
  //  window.location.href = 'update.html';
   console.log(addDoc);
    getElementById("title").value = docSnapu.data().Title;
    getElementById("body").value = docSnapu.data().Body;
 }
// }

// if (docSnap.exists()) {
// } else {
// }
      
    