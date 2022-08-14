import React, {useEffect, useState} from 'react'
import axios from 'axios';
import loading from './asset/loading.gif'
function App() {
  const [data, setData] = useState({});
  const [location,setLocation] = useState('')
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(true);
  const APIkey = "a4b9cf56236de1f7087a9c7a5e4e29ef"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`
  const urlLongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`
  //`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`

    //to-do: move this to an HTTPClient class for all api calls
    //to-do: create redux store and update loadng and response state from there
    const onSearch = (event) => {
      if(event.key === 'Enter'){
        setLoading(true)
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
          setLoading(true)
        })
        .catch(function (error) {
          //On Failed call
          setLoading(false)
          console.log("error")
        })
      }
    }

    useEffect(() => {
      if(latitude !== '' && longitude !== "" && location === ''){
        setLoading(true)
      axios.get(urlLongLat)
      .then((response) => {
        //On sucsessfull call
        setData(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        //On Failed call
        setLoading(false)
        console.log("error")
      })
    }
    }, [latitude, longitude])

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          console.log("here")
        });
      }
      
  
    })

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
            {!loading ? 
            <h1>{Math.round(data?.main?.temp - 273.15) } °C</h1> : 
            <img style={{width: '30%', height: '20%', left: "10%"}} src={require('./asset/loading.gif')} alt="loading-gif" />}
          <div className='descreption'>
            <p> clouds</p>
          </div>
          </div>
          <div className='bottom'> 
            <div className='feels'>
              {!loading ?
              <p className='bold'>{Math.round(data?.main?.feels_like - 273.15)}°F</p> : 
              <img className="loadingGif" src={require('./asset/loading.gif')} alt="loading-gif" />
              }
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

