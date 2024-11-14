import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container my-4">
      <Card/>
      </div>
    </div>
  );
}

export default App;
