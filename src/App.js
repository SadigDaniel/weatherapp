import React, {useState} from 'react'
import axios from 'axios';
function App() {
  
  //const APIkey = "a4b9cf56236de1f7087a9c7a5e4e29ef"
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`
  //`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`
  return (
    <div className="app">
      <div className='container'>
        <div className="top"> 
          <div className='location'> 
            <p>Dallas 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

