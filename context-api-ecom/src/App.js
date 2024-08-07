import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';
import Table  from './components/Table';


function App() {
  return (
    <div className="App my-2">
      <h2>Item's</h2>
      <div className="d-flex">
      <Item name="MacBook Pro" price="100000"/>
      <Item name="Pendrive" price="4000"/>
      <Item name="Mobile" price="35000"/>
      <Item name="Shirt" price="1500"/>
      </div>
      <hr />
      <div className="d-flex">

      <div className="w-50">
      <h2>Your Cart</h2>
      <div className="row">
        <Cart/>
      
      </div>

      </div>
      <div className='w-50 '>
        <h2>total </h2>
        <div className="row">
<Table/>
       
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
