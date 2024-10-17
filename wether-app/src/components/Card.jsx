import React from "react";
import { useWeather } from "../context/Weather";

const Card=()=>{
    const weather = useWeather();
 return(
    <div className="container">

    <table class="table">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Weather</th>
      <th scope="col">City</th>
      <th scope="col">Country</th>
      <th scope="col">Temp_c</th>
      <th scope="col">wind_kph</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img style={{width:"16%"}} src={weather.data?.current?.condition?.icon} alt="Weather condition icon"/></td>
      <td>{weather.data?.location.name}</td>
      <td>{weather.data?.location.country}</td>
      <td>{weather.data?.current?.temp_c}.c</td>
      <td>{weather.data?.current?.wind_kph}</td>
    </tr>
   
  </tbody>
</table>
    </div>
 )
}
export default Card; 