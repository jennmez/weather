import React, { useState, useEffect } from 'react';
import './styles/index.css';
import Weather from './Weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import sun from './SVG/sun.svg';
import Search from './Search';

function App() {
  const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };

  //takes weather from city, initially an empty object b/c we don't have data from the API yet
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [coords, setCoords] = useState({});

  const updateCoords = (coords) => {
    setCoords(coords);
  };

  const search = (evt) => {
    if (coords.lon) {
      setIsLoading(true);
      fetch(
        `${api.baseurl}onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${api.key}`
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setWeather(result);
          setIsLoading(false);
        })
        .catch((err) => console.log('you hit an error', err));
    }
  };

  useEffect(() => {
    if (coords !== '') {
      search(coords);
    }
  }, [coords]);

  return (
    <div className="container">
      <div className="header">
        <h1>Weather</h1>
        <div className="header-icon">
          <img src={sun} alt="sun icon" />
        </div>
        <h1>d</h1>
      </div>
      <Search updateCoords={updateCoords} />
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
        <Weather searchedWeather={weather}></Weather>
      )}
    </div>
  );
}

export default App;
