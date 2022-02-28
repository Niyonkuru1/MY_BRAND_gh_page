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
  const ref = collection(db,"admin")




 // FETCHING ALL DATA FROM DATABASE AND DISPLAY THEM IN THE TABLE
 onSnapshot(ref, (snapshor)=>{
    let data = []
  snapshor.docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id})
  })
  console.log(data);
  let ar = [];
  for (let g=0; g < data.length; g++){

      //Calling the generate table function to add the fetched data
      // into the DOM
    generate_table(data[g]["Title"], data[g]["id"]);

    //Making the array to see the data in the console.
    ar.push(data[g]["Title"]);
  }
  console.log(ar)
  })

//   FUNCTION TO ADD ROW BELOW THE TABLE
function generate_table(title,id) {
    // get the reference for the body
    let tableRef = document.getElementById('fufu').
    getElementsByTagName('tbody')[0];
    let dt = `<td>1</td><td>${title}</td><td>${id}</td>
      <td><a href="#" class="delete">delete</td>`;
var newRow = tableRef.insertRow(tableRef.rows.length);
newRow.innerHTML = dt;
      }


    //DELETING THE DATA FROM DATABASE
    // const deleteBookForm = document.querySelector("#delete")
    //  deleteBookForm.addEventListener('submit', (e) => {
    //      e.preventDefault();
    //      const docRef = doc(db, "admin", deleteBookForm.id.value)
    
    //      deleteDoc(docRef).then(()=>{
    //         deleteBookForm.reset()
    //     })
    //  })

    //FUNCTION FOR DELETING ENTIRE ROW FROM THE TABLE (DOM)
    var itemList = document.getElementById('items');
    itemList.addEventListener('click', removeItem);
    // Remove item
    function removeItem(e){
      if(e.target.classList.contains('delete')){
        if(confirm('Warning, Are you sure to DELETE THE WHOLE BLOG?  Press OK to accept')){
          var tr = e.target.parentElement.parentElement;
          itemList.removeChild(tr);
        }
      }
    }  

      
    