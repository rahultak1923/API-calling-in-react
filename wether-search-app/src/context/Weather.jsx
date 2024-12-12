import React, { createContext, useContext, useState } from 'react'
const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext)
}
const Weather = (props) => {
    const [data, setData]=useState(null);
    const [searchCity, setSearchCity]=useState(null);

  return (
    <div>
      <WeatherContext.Provider value={{searchCity, data}}>
        {props.children}
      </WeatherContext.Provider>
    </div>
  )
}

export default Weather
