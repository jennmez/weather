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
              <div className="date">{timeConverter(day.dt)}</div>
              <div className="daily-icon">
                <WeatherIcon currentWeather={day}></WeatherIcon>
                <div>
                  Daytime Temperature:
                  {tempType === 'F'
                    ? convertFah(day.temp.day)
                    : convertCel(day.temp.day)}
                  <span>°{tempType}</span>
                </div>
                <div>Weather Conditions: {day.weather[0].description}</div>
                <div>Midday UV index: {day.uvi}</div>
              </div>
            </div>
          ))
          .slice(1)}
      </div>
    </>
  );
};

export default DailyForecast;
