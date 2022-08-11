import React, {useState} from 'react'
import axios from 'axios';
function App() {
  const [data, setData] = useState({});
  const [location,setLocation] = useState('')
  const APIkey = "a4b9cf56236de1f7087a9c7a5e4e29ef"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`
  //`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`

    const onSearch = (event) => {
      if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
    }

  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={onSearch}
        placeholder="Enter location"
        type="text"
        />
      </div>
      <div className='container'>
        <div className="top"> 
          <div className='location'> 
            <p>{data?.name}</p>
          </div>
          <div className="temp">
            {data?.main !== null ? 
            <h1>{Math.round(data?.main?.temp - 273.15) } °C</h1> : 
            <h1>NA </h1>}
          <div className='descreption'>
            <p> clouds</p>
          </div>
          </div>
          <div className='bottom'> 
            <div className='feels'>
              
              <p className='bold'>{Math.round(data?.main?.feels_like - 273.15)}°F</p>
              <p>Feels Like </p>
            </div>
            <div className='humidity'>
              <p className='bold'>{data?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className='winds'>
              <p className='bold'>12 mph</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

