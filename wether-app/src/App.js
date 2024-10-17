import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';


function App() {
  const weather = useWeather();
  console.log(weather)
  return (
    <div className="App">
   
   <Navbar/>
   <div className="d-flex" style={{paddingRight:"100px", paddingLeft:"100px", marginTop:"1rem"}}>

   <Input/>
   <Button onClick={weather.fetchData} value="Search" color="success"/>
   </div>
   <Card/>
   <Button value="Refresh" color="danger"/>
    </div>
  );
}

export default App;
