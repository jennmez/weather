import React from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/index.css';
import { convertCel, convertFah } from './utilities';

const Temperature = (props) => {
  const {
    // sunrise,
    // sunset,
    temp,
    // feels_like,
    // humidity,
    // wind_speed,
  } = props.current;

  return (
    <>
      <div className="weather-container">
        <div className="weather-pic">
          <WeatherIcon
            className="weather-icon"
            currentWeather={props.current}
          ></WeatherIcon>
        </div>
        <div className="temp-container">
          <div className="temp">
            {props.tempType === 'F' ? convertFah(temp) : convertCel(temp)}
            <span>°{props.tempType}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temperature;
