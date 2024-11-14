import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container my-4">
        <div className="d-flex">
        <Input/>
        <Button value="Search" color="primary"/>
        </div>
      <Card/>
      <Button value="Refresh" color="success"/>
      </div>
    </div>
  );
}

export default App;
