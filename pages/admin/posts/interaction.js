// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import {getFirestore, collection, 
    addDoc, deleteDoc, doc,updateDoc,serverTimestamp,
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

  let ar = [];
  for (let g=0; g < data.length; g++){
      //Calling the generate table function to add the fetched data
      // into the DOM
    generate_table(data[g]["Title"],data[g]['commentArr'].length, data[g]["id"], data[g]["CreatedAt"].toDate().toDateString(),
     data[g]["CreatedAt"].toDate().toLocaleTimeString())
    ar.push(data[g]["Title"]);
  }
  })

//   FUNCTION TO ADD ROW BELOW THE TABLE
function generate_table(title, comNumber, id, whenCreated, dateCreated) {
    // get the reference for the body
    let tableRef = document.getElementById('table').
    getElementsByTagName('tbody')[0];
    let dt = `<td>${whenCreated} at ${dateCreated}</td>
              <td><b>${title}</b></td>
              <td>${comNumber}</td>
              <td><a href="#" class="edit">Update    </a><a href="#" class="delete">delete</a></td>`;
var newRow = tableRef.insertRow(tableRef.rows.length);
newRow.innerHTML = dt;
newRow.setAttribute("rowid",id)
      }
      //Reference to delete the document
    var itemList = document.getElementById('items');
    itemList.addEventListener('click', (e)=>{
      removeItem(e);
      updatingItem(e);
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

    function updatingItem(err){
      if(err.target.classList.contains('edit')){
    var targetRowIdToUpdate = err.target.parentElement.parentElement.getAttribute("rowid");
    const docRef = doc(db, "admin-page", targetRowIdToUpdate) 
    getDoc(docRef)
      .then((doc)=>{
        var title1 = doc.data().Title;
        var numComm1 = doc.data().commentArr.length;
        var date1 = doc.data().CreatedAt.toDate().toDateString()
        var body1 = doc.data().Body

        let formEL = document.createElement('form');
        formEL.id = "posti"
        formEL.setAttribute("method",'post')
        formEL.setAttribute("action",'create')
        // formEL.setAttribute("id",)

        let titleDivEl = document.createElement('div');
        let labelElTitle = document.createElement('label');
        labelElTitle.appendChild(document.createTextNode('Title'))
        titleDivEl.appendChild(labelElTitle);
        let inputEl = document.createElement('input');
        inputEl.setAttribute("type",'text')
        inputEl.setAttribute("name",'title')
        inputEl.setAttribute("class",'field')
        inputEl.setAttribute("id",'body')
        inputEl.setAttribute("value",title1)
        titleDivEl.appendChild(inputEl)

        let bodyDivEl = document.createElement('div');
        let labelElbody = document.createElement('label');
        labelElbody.appendChild(document.createTextNode('Body'))
        bodyDivEl.appendChild(labelElbody);
        let textArea = document.createElement('textarea')
        textArea.setAttribute("name", "body")
        textArea.setAttribute("id", "body")
        textArea.setAttribute("class", "field")
        textArea.appendChild(document.createTextNode(body1))
        bodyDivEl.appendChild(textArea);

        let buttonDivEl = document.createElement('div');
        let submitBtn = document.createElement('button')
        submitBtn.setAttribute("type", "submit")
        submitBtn.setAttribute("class", "btn-big")
        submitBtn.appendChild(document.createTextNode('Update Post'))
        buttonDivEl.appendChild(submitBtn)
  
      formEL.appendChild(titleDivEl);
      formEL.appendChild(bodyDivEl);
      formEL.appendChild(buttonDivEl);


      document.querySelector('.content')
      .append(formEL)
      updatePost(targetRowIdToUpdate)
      }) 
    // updatePost(targetRowIdToUpdate)
    }
    }

    function updatePost(id){
      const updateArrComment = document.getElementById('posti')
      updateArrComment.addEventListener('submit',(e)=>{
        e.preventDefault()
         const ref = doc(db, 'admin-page',id)
         updateDoc(ref, {
          Title: updateArrComment.title.value,
          Body: updateArrComment.body.value,
          // CreatedAt: serverTimestamp(),
         }).then(()=>{
           updateArrComment.reset()
           console.log("COMMENT added successfully!!!");
         })
      })
    }