import React, { useState } from 'react';
import './styles/index.css';
import Temperature from './Temperature';
import DailyForecast from './DailyForecast';
import { timeConverter } from './utilities';

const Weather = (props) => {
  const { current, daily } = props.searchedWeather;

  const [tempType, setTemp] = useState('F');

  const toggle = () => {
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };

  return (
    <div className="main">
      {typeof current !== 'undefined' ? (
        <>
          <div className="general-info">
            <div className="date-time">{timeConverter(current.dt)}</div>
            <div className="weather-type">
              Today's forecast is: {current.weather[0].main}
            </div>
            <button className="toggle" onClick={toggle}>
              change to °{tempType === 'F' ? 'C' : 'F'}
            </button>
          </div>
          <Temperature current={current} tempType={tempType}></Temperature>
          <DailyForecast daily={daily} tempType={tempType}></DailyForecast>
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
