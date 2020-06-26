import React from 'react';
import './styles/index.css';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';

const Weather = (props) => {
  const { weather } = props;
  const { main, sys } = weather;

  let today = new Date();
  let date =
    today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes();
  let dateTime = date + ' ' + time;

  return (
    <div className="main">
      {typeof main != 'undefined' ? (
        <>
          <div className="date-time">{dateTime}</div>
          <div className="location">
            {weather.name}, {sys.country}
          </div>
          <div className="weather-container">
            <WeatherIcon currentWeather={weather}></WeatherIcon>
            <Temperature main={main}></Temperature>
          </div>
          <div className="temp-description">
            {weather.weather[0].description}
          </div>
        </>
      ) : (
        <>
          <div className="location">
            Enter the name of a city to see the current forecast.
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
