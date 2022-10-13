import { useEffect } from 'react';
import './App.css';
import Data from '../src/Data.json'
import { useState } from 'react';
import Edit from './Edit';
import Main from './Main';
function App() {

  const [post, setpost] = useState([])
  const [name, setName] = useState([])
  const [age, setAge] = useState([])
  const [id, setId] = useState(5)

  const [namedata, setNamedata] = useState("")
  const [agedata, setAgedata] = useState("")
  const [count, setcount] = useState(5)

  useEffect(() => {
    setpost(Data) 
    // window.localStorage.setpost(Data);
    // window.localStorage.setItem('user', JSON.stringify(post))
  },[])

  let addname = (e) => {
    setNamedata(e.target.value)
  }
  let addage = (e) => {
    setAgedata(e.target.value)
  }
  let addhendler = () => {
    setpost([...post ,{
      id:count,
      name:namedata,
      age:agedata
    }])
    setcount(count + 1)
  }


  let editName = (e) => {
    setName(e.target.value)
  }

  let editage =(e) => {
    setAge(e.target.value)
  }

  let edited = (item) => {
    setId(item.id)
  }

  let editHendler = (e) => {
    // setpost(post.name == "salom")
    // setpost(post.map(el => {
    //   return el.name == "salom"
    // }))

  //   setpost([
  //     {name:name,
  //     age:age
  //     } 
  // ] )
  setpost([{ ...post, name: name , age:age}]);
    console.log(post);
  }

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <div className="App">
     <div>
       <input type="text" placeholder='name' onChange={addname}/>
       <input type="number" placeholder='age' onChange={addage}/>

       <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>

       <button onClick={addhendler}>add</button>
     </div>
     {
      post.map((item, i) => {
        return <Main item={item} setpost={setpost} edited={edited} post={post} editHendler={editHendler} editName={editName} editage={editage} id={id} />
      })
     }

    </div>
  );
}

export default App;



// import React, { useState } from "react";
  
// function App() {
  
//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <img src={file} />
  
//         </div>
  
//     );
// }
  
// export default App;
