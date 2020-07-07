import React, { useState, useRef, useEffect, useMemo } from 'react';
import './styles/index.css';
import { timeConverter, convertCel, convertFah } from './utilities';
import WeatherIcon from './WeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const DailyForecast = (props) => {
  console.log(props);

  const [tempType, setTemp] = useState('F');

  const toggle = () => {
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };

  const [showInfo, setInfo] = useState(false);

  const display = () => {
    setInfo((prevState) => (prevState === false ? true : false));
  };

  return (
    <>
      <h3>7-Day Forecast</h3>
      {showInfo === false ? <h5>Click for more</h5> : <h5>Hide the details</h5>}
      <div>
        <FontAwesomeIcon
          className="icon"
          icon={showInfo === false ? faCaretDown : faCaretUp}
          color="#ff9800"
          size="lg"
          onClick={display}
        />
      </div>
      {showInfo === false ? null : (
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
                <p>UV index: {day.uvi}</p>
              </div>
            ))
            .slice(1)}
        </div>
      )}
    </>
  );
};

export default DailyForecast;
