import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';
import { wethercard } from './api';


function App() {
  const [data,setData]= useState(null);

  useEffect(()=>{
    wethercard().then((posts)=> console.log(posts.location));
    wethercard().then((posts)=> setData(posts.location));
  },[]);
  
  return (
    <div className="App">
      {data && data.length > 0 ? (
        data.map((e) => <Card  country={e.country} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
