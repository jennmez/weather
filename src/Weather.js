import React from 'react';
import './styles/index.css';
import Temperature from './Temperature';
import DailyForecast from './DailyForecast';
import { timeConverter } from './utilities';

const Weather = (props) => {
  const { current, daily, hourly } = props.searchedWeather;

  return (
    <div className="main">
      {typeof current !== 'undefined' ? (
        <>
          <div className="date-time">{timeConverter(current.dt)}</div>
          {/* <div className="location">
            {weather.name}, {sys.country}
          </div> */}
          <div className="weather-type">
            Today's forecast is: {current.weather[0].main}
          </div>
          <Temperature current={current}></Temperature>
          <DailyForecast daily={daily}></DailyForecast>
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
