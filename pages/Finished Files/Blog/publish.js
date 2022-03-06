  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore, arrayUnion, doc,
     collection, onSnapshot
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
const ref = collection(db,"admin-page")

onSnapshot(ref, (snapshor)=>{
  // getDocs(ref).then((snapshor)=>{
  let data = []
snapshor.docs.forEach((doc) => {
  data.push({ ...doc.data(), id: doc.id})
})
console.log(data.length)
let ar = [];
for (let g=0; g < data.length; g++){
    //Calling the generate table function to add the fetched data into the DOM
  generateBlogCard(data[g]["Title"],data[g]["Body"], 
  data[g]["CreatedAt"].toDate().toDateString())
  // ar.push(data[g]["Title"]);
}
})
//   FUNCTION TO ADD ROW BELOW THE TABLE
function generateBlogCard(title,body, dateCreated) {

  let mainDiv = document.getElementById('wrapper-main')
  let containerDiv = document.createElement("div")
  containerDiv.className = "container"

  let imgDiv = document.createElement("div")
  imgDiv.className = "image"
  let image = document.createElement("img")
  image.setAttribute('src','/images/project.png')
  imgDiv.appendChild(image)

  let headDiv = document.createElement("div")
  headDiv.className = "head"

  let headingDiv = document.createElement("div")
  headingDiv.className = "heading"
  headingDiv.appendChild(document.createTextNode(title))
  headDiv.appendChild(headingDiv)

  let dateDiv = document.createElement("div")
  dateDiv.className = "date"
  dateDiv.appendChild(document.createTextNode(dateCreated))
  headDiv.appendChild(dateDiv)

  let paraDiv = document.createElement("p")
  paraDiv.appendChild(document.createTextNode(body))
  headDiv.appendChild(paraDiv)

  let tostyleDiv= document.createElement("div")
  tostyleDiv.className = "toStyleButton"
  let buttonDiv = document.createElement("div")
  buttonDiv.className = "button"
  let anchorElement = document.createElement("a")
  anchorElement.appendChild(document.createTextNode("READ MORE"))
  anchorElement.className = "#article1"
  buttonDiv.appendChild(anchorElement)
  tostyleDiv.appendChild(buttonDiv)
  headDiv.appendChild(tostyleDiv)


  containerDiv.appendChild(imgDiv)
  containerDiv.appendChild(headDiv)

  mainDiv.appendChild(containerDiv)
    }