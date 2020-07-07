import React from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/index.css';
import { convertCel, convertFah } from './utilities';

const Temperature = (props) => {
  const { temp, feels_like } = props.current;

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
          <h5>
            Feels like{' '}
            {props.tempType === 'F'
              ? convertFah(feels_like)
              : convertCel(feels_like)}
            °
          </h5>
        </div>
      </div>
    </>
  );
};

export default Temperature;
