import React, { useState } from 'react';
import './styles/index.css';
import Weather from './Weather';

function App() {
  // let today = new Date();
  // let date =
  //   today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();
  // let time = today.getHours() + ':' + today.getMinutes();
  // let dateTime = date + ' ' + time;

  const api = {
    key: '4884f8b1995ccaa945f940a3dd644669',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };
  //taking a city from our search, initial state is empty string
  const [city, setCity] = useState('');
  //takes weather from city, initially an empty object b/c we don't have data from the API yet
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const search = (evt) => {
    if (evt.key === 'Enter') {
      setIsLoading(true);
      console.log('searched city', city);
      fetch(`${api.baseurl}weather?q=${city}&appid=${api.key}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log('result', result);
          setWeather(result);
          setCity('');
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Weather Outlook</div>
        <input
          type="text"
          className="search"
          placeholder="What's the weather in..."
          onChange={(event) => setCity(event.target.value)}
          value={city}
          onKeyPress={search}
        ></input>
      </div>
      {isLoading ? (
        <div>
          <p>Please wait while we find that forecast.</p>
        </div>
      ) : null}
      <Weather weather={weather}></Weather>
    </div>
  );
}

export default App;
