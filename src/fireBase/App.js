import './App.css';
// import database from './firebase'
// import {ref,set} from 'firebase/database'
import app from './firebase'
import { getFirestore , addDoc , collection} from 'firebase/firestore'

// function App() {
//   const putData = () =>{
//     set(ref(database,"users/Test"),{
//       name: "sahil",
//       age : 20,
//     })
//   }

// }

const firestore = getFirestore(app)

function App(){
   const addDocument = () => {
    addDoc (collection(firestore,"cities"),
  {
    name: "sahil",
    age : "21"
  }
  )
   }
   const subcollection = () =>{
    addDoc(collection(firestore,"cities//sectors"),
  {
      name : "veer",
      age:"11"
  })
   }
     return (
   <>
   <h1>Real Time</h1>
   <button onClick={putData}>Data pass</button>
   </>
  );
}

export default App;
