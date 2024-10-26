import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "96d218a329ce8b1914e18be339732253";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      let result = {
        city: city,
        temp: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        feels_like: data.main.feels_like
      };

      console.log(result);
      return result;
    } catch (error) {
      setError(true);
      console.error(error);
      return null; // Return null on error
    }
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");

    let info = await getWeatherInfo();

    // Check if info is defined before updating
    if (info) {
      updateInfo(info);
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <TextField id="city"
          name='city'
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange} />
        <br /><br />
        <Button variant="contained" size='large' type='submit'>Search</Button> <br /><br />
        {error && <p style={{ color: "red", fontWeight: "bolder" }}>No such place exists!</p>}
      </form>
    </div>
  )
}