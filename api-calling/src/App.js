import { useState,useEffect } from 'react';
import {getPosts , getRandomUser}from './api';
import PostCard from "./Components/PostCard"
import UserCard from './Components/UserCard';
import './App.css';

function App() {

  const[data, setData]= useState(null);

  // rendom user ke api data show kar ne ke liye

  const [user,setUser]= useState(null);

useEffect(()=>{
  getPosts().then((posts)=> setData(posts));
},[]);

useEffect(()=>{
  getRandomUser().then((user)=> setUser(user.results[0]));
},[])
console.log(user)
  return (
    <div className="App">
     {user && <UserCard data={user}/>}
      
     {
      data ? data.map((e)=> <PostCard title={e.title} body={e.body}/>): <p>no Data</p>
     }
    </div>
  );
}

export default App;
