import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./searchBox"


export default function weatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Kolhapur",
        feels_like: 302.71,
        humidity: 43,
        max_temp: 302.74,
        min_temp: 302.74,
        temp: 302.74,
        weather: "clear sky",
})

let updateInfo = (result) => {
    setWeatherInfo(result);
}

  return(
    <div className="weather-app">
        <h2>Weather App</h2>
        <SearchBox updateInfo ={updateInfo}/>
         <InfoBox info={weatherInfo}/>
    </div>
  )
}