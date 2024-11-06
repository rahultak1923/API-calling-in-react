// import logo from './logo.svg';
import './App.css';
import {getData} from './api'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getData().then((data)=> console.log(data))
  },[])
  useEffect(()=>{
    getData().then((data)=> setData(data))
  },[])
  return (
    <div className="App">
     {data.length >0 ? ( data.map((data )=><h2 key={data.id}>{data.id} {data.name}</h2>)):(<p>no data </p>)}
    </div>
  );
}

export default App;
