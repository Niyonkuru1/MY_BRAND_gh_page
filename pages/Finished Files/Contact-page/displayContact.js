  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore, arrayUnion, doc,
     collection, onSnapshot,getDocs,getDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAMXuF7n_5lWaRI4M51Mb9aqLAMwjSOxY",
    authDomain: "admin-demo-7d3c5.firebaseapp.com",
    projectId: "admin-demo-7d3c5",
    storageBucket: "admin-demo-7d3c5.appspot.com",
    messagingSenderId: "961539757601",
    appId: "1:961539757601:web:d75a838e2d6bd1310bf560"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const refCom = collection(db,"comment_section");






displayAll(refCom);

function displayAll(refi){
  onSnapshot(refi, (snapshor)=>{
    let data = []
  snapshor.docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id})
  })
  let ar = [];
  for (let g=0; g < data.length; g++){
      //Calling the generate table function to add the fetched data
      // into the DOM
    generate_table(data[g]["Name"],data[g]["Phone"],data[g]["Message"],
      data[g]["id"], 
    data[g]["MessageSentAt"].toDate().toLocaleTimeString())
    ar.push(data[g]["Title"]);
  }
  })
}

    //   FUNCTION TO ADD NEW MESSAGE SENT
    function generate_table(name, phone, message, id, whenCreated) {
      // get the reference for the body
      let tableRef = document.getElementById('table').
      getElementsByTagName('tbody')[0];
      let dt = `<td>${name} at </td>
                <td>${phone}</td>
                <td><b>${message}</b></td>
                <td>${whenCreated}</td>
                <td><a href="#" class="delete">delete</a></td>`;
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = dt;
    newRow.setAttribute("rowid",id);
      }