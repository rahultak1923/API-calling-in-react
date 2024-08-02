import React,{useState} from "react";

const CounterComponent = ()=>{
    const [count,setCount] = useState(0);
    const [value, setValue]= useState("rahul");


    return(
        <div>
            <p>Count Componoent - {count}</p>
            <h6>Number is {count % 2 ===0 ? "Even":"Odd "}</h6>
            <p>By {value}</p>
            
            <button onClick={()=>{
                setCount(count + 1)
            }}>Increment</button>
            <button onClick={()=>{
                setValue("React")
            }}>React</button>
        </div>
    )
}
export default CounterComponent;