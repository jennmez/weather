import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Temperature = (props) => {
  const { temp, temp_max, temp_min, humidity } = props.main;
  const { sunrise, sunset } = props.sys;
  const { speed } = props.wind;

  const [tempType, setTemp] = useState('F');
  const [showInfo, setInfo] = useState(false);

  const convertCel = (currentTemp) => {
    let converted = currentTemp - 273.15;
    return Math.round(converted);
  };

  const convertFah = (currentTemp) => {
    let converted = currentTemp * 1.8 - 459.67;
    return Math.round(converted);
  };

  const toggle = () => {
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };

  const timeConverter = (time) => {
    const now = new Date(time * 1000);
    const timeInZone = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });
    return timeInZone;
  };

  const display = () => {
    setInfo((prevState) => (prevState === false ? true : false));
  };

  return (
    <>
      <div className="weather-container">
        <div className="weather-pic">
          <WeatherIcon currentWeather={props.currentWeather}></WeatherIcon>
        </div>
        <div className="temp-container">
          <div className="temp">
            {tempType === 'F' ? convertFah(temp) : convertCel(temp)}
            <span>°{tempType}</span>
          </div>
          <button className="toggle" onClick={toggle}>
            change to °{tempType === 'F' ? 'C' : 'F'}
          </button>
        </div>
        <div className="more-temp">
          <h2>view more weather info</h2>
          <FontAwesomeIcon
            icon={faCaretDown}
            color="#ff9800"
            size="lg"
            onClick={display}
          />
          {showInfo === false ? null : (
            <div className="highs-lows">
              <p>
                High:{' '}
                {tempType === 'F' ? convertFah(temp_max) : convertCel(temp_max)}
                <span>°{tempType}</span>
              </p>
              <p>
                Low:{' '}
                {tempType === 'F' ? convertFah(temp_min) : convertCel(temp_min)}
                <span>°{tempType}</span>
              </p>
              <p>Humidity: {humidity}%</p>
              <p>Wind Speed: {speed} </p>
              <p>Sunrise: {timeConverter(sunrise)}</p>
              <p>Sunset: {timeConverter(sunset)}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temperature;
