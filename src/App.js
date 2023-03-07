import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState} from 'react';
import axios from 'axios';

function App() {
  const[Post,setPost] = useState({})
  const fetchData = ()=>{
    axios.get('https://api.adviceslip.com/advice').then(res=>{
      console.log(res)
      setPost(res)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  // fetchData()
return(
  <div className="App">
    <h2>ADVICE {Post.data.slip.id}</h2>
    <p>{Post.data.slip.advice}</p>
    <button onClick={fetchData}>Get Data</button>
    
    </div>
  
)

    

}

export default App;
