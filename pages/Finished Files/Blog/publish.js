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
const ref = collection(db,"admin-page")

// onSnapshot(ref, (snapshor)=>{
  getDocs(ref).then((snapshor)=>{
  let data = []
snapshor.docs.forEach((doc) => {
  data.push({ ...doc.data(), id: doc.id})
})
console.log(data);
let arr_id = [];
for (let g=0; g < data.length; g++){
    //Calling the generate table function to add the fetched data
    // into the DOM
  generateBlogCard(data[g]["Title"],data[g]["Body"], 
  data[g]["CreatedAt"].toDate().toDateString(), data[g]["id"])
  arr_id.push(data[g]["id"]);
}
console.log(arr_id);
// for (let p=0; p < arr_id.length; p++){
  // var hummer = arr_id;
let buttoni = document.querySelectorAll(".kanda")
buttoni.forEach((buttonItem, index)=>{
  buttonItem.addEventListener("click",(e)=>{
    console.log("hello " + index);
    if (e.target.getAttribute("card_id") == arr_id[index]){
      console.log(`Ukanze iyi idi ${arr_id[index]} and same to this ${e.target.getAttribute("card_id")}`)
      // let mainArticleDiv = document.createElement("main")
      const docRef = doc(db, "admin-page", arr_id[index]);
      getDoc(docRef)
      .then((doc)=>{
        console.log(`Document data:`,doc.data().Body, doc.id);
        // let bodyRef = document.getElementsByTagName("body")
        // console.log(bodyRef);
        console.log(doc.id)
let mainContent = document.getElementById(doc.id);
console.log(mainContent)
      let  dateArticleDiv = document.createElement("div")
      dateArticleDiv.className = "date"
      dateArticleDiv.appendChild(document.createTextNode(` Date created: ${doc.data().CreatedAt.toDate().toDateString()}`))
      let authorArticleDiv = document.createElement("div")
      authorArticleDiv.className = "author"
      authorArticleDiv.appendChild(document.createTextNode("Author: "+"NIYONKURU Sylvain"))
      let titleArticleDiv = document.createElement("div")
      titleArticleDiv.className = "title"
      titleArticleDiv.appendChild(document.createTextNode(doc.data().Title))
      let bodyArticleDiv = document.createElement("div")
      bodyArticleDiv.className = "body"
      let paraArticleDiv = document.createElement("p")
      paraArticleDiv.appendChild(document.createTextNode(doc.data().Body))
      bodyArticleDiv.appendChild(paraArticleDiv)
      let articleDiv = document.createElement("div")
      articleDiv.setAttribute("id", doc.id)

      articleDiv.appendChild(dateArticleDiv)
      articleDiv.appendChild(authorArticleDiv)
      articleDiv.appendChild(titleArticleDiv)
      articleDiv.appendChild(bodyArticleDiv)

      mainContent.appendChild(articleDiv)
      // bodyRef.appendChild(articleDiv);
      // headingDiv.appendChild(document.createTextNode(title))
      // headDiv.appendChild(headingDiv)
    });
    }
    
 })
})

let commenti = document.querySelectorAll('.comment')
commenti.forEach((comItem,index)=>{
  let secondMain = document.getElementById(`com${arr_id[index]}`)
comItem.addEventListener("click", (e)=>{
  let formEL = document.createElement('form');
let textArea = document.createElement('textarea')
textArea.setAttribute("placeholder", "Enter your comment here")
let submitBtn = document.createElement('button')
submitBtn.setAttribute("type", "submit")
submitBtn.appendChild(document.createTextNode('Add your comment'))
formEL.appendChild(textArea);
formEL.appendChild(submitBtn);
secondMain.appendChild(formEL);
})
})

// }
  })
//   FUNCTION TO ADD ROW BELOW THE TABLE
function generateBlogCard(title,body, dateCreated, Id) {

let parentDiv = document.getElementById('parent');
let mainContentDiv = document.createElement('div')
mainContentDiv.id = `${Id}`

// let mainPopupDiv = document.createElement('div')
// mainPopupDiv.id = `com${Id}`
// parentDiv.appendChild(mainPopupDiv);

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
  anchorElement.setAttribute("href",`#${Id}`)
  anchorElement.setAttribute("card_id",Id)
  anchorElement.className = "kanda";

  let comElement = document.createElement("a")
  comElement.appendChild(document.createTextNode("ADD COMMENT"))
  comElement.setAttribute("href",`#com${Id}`)
  comElement.setAttribute("card_id",Id)
  comElement.className = "comment";

  buttonDiv.appendChild(anchorElement)
  buttonDiv.appendChild(comElement)
  tostyleDiv.appendChild(buttonDiv)

  headDiv.appendChild(tostyleDiv)
  containerDiv.appendChild(imgDiv)
  containerDiv.appendChild(headDiv)

  mainDiv.appendChild(containerDiv)
    }