import React,{useEffect,useState} from 'react';
import './App.css';
import { getPosts, userPosts } from './api';
import {rendomPost} from './api';
import PostCard from './components/PostCard';
import Random from './components/Random';
import UserData from './components/UserData';

function App() {
// title and body fetch 
  const [data,setdata]= useState(null);
  // random user fetch data 
  const [userData, setUserData]=useState(null);
  // user data and comment 
  const [clientData, setclientData]=useState(null);


  // title and body fetch data 
  useEffect(()=>{
    getPosts().then((posts)=> setdata(posts));
    // getPosts().then((posts)=> console.log(posts));
  },[])


  // random user fetch 
  useEffect(()=>{
    rendomPost().then((user)=> setUserData(user.results[0]));
  },[])

  // user data and comment 
  useEffect(()=>{
    userPosts().then((client)=> setclientData(client));
    userPosts().then((client)=> console.log(client));
    
  },[])
  return (
    <>
    {/* user data and comment  */}
    <div>
        {clientData ? (
          clientData.map((m) => <UserData email={m.email} name={m.name} body={m.body} />)
        ) : (
          <p>No data</p>
        )}
      </div>
    {/* random user fetch  */}
    <div>
   {userData &&<Random userData={userData}/>}
    </div>
    {/* title and body data fetch  */}
    <div className="grid grid-cols-3">
      {data ? data.map((e) =><PostCard title={e.title} body={e.body}/>): <p>No data</p>}
    </div>
    
    </>
  );
}


export default App;
