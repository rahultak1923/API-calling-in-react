import React ,{useEffect, useState}from "react";

const Timer= ()=>{

    const [time , settime]= useState(0);

     useEffect(()=>{
        const time = setTimeout(() => settime(
            time + 1 
        ), 1000);
        console.log("timer is running now",time)
    },[time])

 return(
    <div>
    <h1>Current Time  </h1>
    <p>Current Time is {time}</p>
    </div>
 )
}

export default Timer;


