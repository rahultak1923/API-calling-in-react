import React, {useEffect, useState} from "react";

const Mycomponent= ()=>{
const [count, setCount]= useState(0);
const [count2, setCount2]=useState(0);

// jab components mount hua starting time to run the command the useeffect run 
    useEffect(()=>{
        console.log('my component is mounting')

        return function(){
            console.log("unmonunting component ")
        }
    },[]);

// jab component edit hua tab command run hogi 
    useEffect(()=>{
        console.log("count is updated ",count,count2)

        return function(){
            console.log("returning mounting",count)
        }
    },[count2, count])
    return(
        <div>
            <h3>count is {count}</h3>
            <h3>count is {count2}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Update</button>
            <button onClick={()=>{
                setCount2(count2 + 10)
            }}>update 10 </button>
        </div>
    )
}
export default Mycomponent;