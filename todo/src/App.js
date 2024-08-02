import './App.css';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterComponents';
import './style.css'

function App() {
  return (
    <div className="todo-container">
      <CounterComponent />
     <Header heading = "todoie app"/>
     <TodoItem title = "hello"/>
     <TodoItem title = "rohit" completed= {true}/>
     <Button/>

    </div>
  );
}

export default App;
