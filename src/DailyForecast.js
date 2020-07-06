import React, { useState } from 'react';
import './styles/index.css';
import { timeConverter, convertCel, convertFah } from './utilities';
import WeatherIcon from './WeatherIcon';

const DailyForecast = (props) => {
  console.log(props);

  const [tempType, setTemp] = useState('F');

  const toggle = () => {
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };

  return (
    <>
      <h2>Weekly Forecast</h2>
      <div className="dailys">
        {props.daily
          .map((day, i) => (
            <div key={i} className="day">
              <h4 className="date">{timeConverter(day.dt)}</h4>
              <div className="daily-icon">
                <WeatherIcon currentWeather={day}></WeatherIcon>
              </div>
              <p>
                Daytime Temp:{' '}
                {tempType === 'F'
                  ? convertFah(day.temp.day)
                  : convertCel(day.temp.day)}
                <span>°{tempType}</span>
              </p>
              <p>Forecast: {day.weather[0].description}</p>
              <p>Midday UV index: {day.uvi}</p>
            </div>
          ))
          .slice(1)}
      </div>
    </>
  );
};

export default DailyForecast;
