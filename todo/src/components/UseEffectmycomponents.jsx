import React, {useEffect, useState} from "react";

const Mycomponent= ()=>{
const [count, setCount]= useState(0);

// jab components mount hua starting time to run the command the useeffect run 
    useEffect(()=>{
        console.log('my component is mounting')
    },[]);

// jab component edit hua tab command run hogi 
    useEffect(()=>{
        console.log("count is updated ",count)
    },[count])
    return(
        <div>
            <h3>count is {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Update</button>
        </div>
    )
}
export default Mycomponent;