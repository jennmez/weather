import React, { useState } from 'react';
import './styles/index.css';
import Weather from './Weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function App() {
  const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
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
      fetch(`${api.baseurl}weather?q=${city}&appid=${api.key}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setWeather(result);
          setCity('');
          setIsLoading(false);
        })
        .catch((err) => console.log('you hit an error', err));
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
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} size="lg" color="#ff9800" pulse />
          <p>Please wait while we find that forecast.</p>
        </div>
      ) : null}
      {weather.cod === '404' ? (
        <div className="error">
          <h3>Oh no! That city was not found. Please try another location!</h3>
        </div>
      ) : (
        <Weather weather={weather}></Weather>
      )}
    </div>
  );
}

export default App;
