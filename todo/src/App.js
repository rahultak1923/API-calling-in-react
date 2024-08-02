import './App.css';
// import Header from './components/Header'
// import TodoItem from './components/TodoItem';
// import Button from './components/Button';
// import CounterComponent from './components/CounterComponents';
import './style.css'
import UseEffectmycomponents from './components/UseEffectmycomponents'
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setVisible]= useState(true);
  useEffect (()=>{
    console.log("App com. is mounting")
  },[])
  return (
    <>
    
    {/* <div className="todo-container">
      <CounterComponent />
     <Header heading = "todoie app"/>
     <TodoItem title = "hello"/>
     <TodoItem title = "rohit" completed= {true}/>
     <Button/>

    </div> */}
    <div>
      {isVisible? <UseEffectmycomponents/>:<></>}
      <button onClick={()=>{
        setVisible(!isVisible)
      }}>Toggle</button>
    </div>
    </>
  );
}

export default App;
