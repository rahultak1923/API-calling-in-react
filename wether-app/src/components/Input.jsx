import React from "react";
import { useWeather } from "../context/Weather";

const Input =()=>{
    const weather = useWeather();
    // console.log("weather",weather);
    return(
        <>
        
        <div className="container">

        <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">City</span>
  <input type="text" class="form-control" aria-label="Sizing example input" value={weather.searchCity} onChange={(e)=> weather.setSearchCity(e.target.value)} aria-describedby="inputGroup-sizing-default"/>
</div>
        </div>

{/* <div>
    <input type="text"value={weather.searchCity} onChange={(e)=> weather.setSearchCity(e.target.value)} />
</div> */}
        </>
    )
}
export default Input ;