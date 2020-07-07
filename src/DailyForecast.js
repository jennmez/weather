import React, { useState, useRef, useEffect, useMemo } from 'react';
import './styles/index.css';
import { timeConverter, convertCel, convertFah } from './utilities';
import WeatherIcon from './WeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const DailyForecast = (props) => {
  const [info, showInfo] = useState(false);

  let divRef = useRef(0);
  const tl = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    tl.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.7,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    if (info) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [info]);

  return (
    <>
      {!info ? (
        <h3>Show me the 7-day forecast</h3>
      ) : (
        <h3>Hide the 7-day forecast</h3>
      )}
      <div>
        <FontAwesomeIcon
          className="icon"
          icon={!info ? faCaretDown : faCaretUp}
          color="#ff9800"
          size="lg"
          onClick={() => showInfo(!info)}
        />
      </div>
      <div ref={divRef} className="dailys">
        {props.daily
          .map((day, i) => (
            <div key={i} className="day">
              <h4 className="date">{timeConverter(day.dt)}</h4>
              <div className="daily-icon">
                <WeatherIcon currentWeather={day}></WeatherIcon>
              </div>
              <p>
                Day:{' '}
                {props.tempType === 'F'
                  ? convertFah(day.temp.day)
                  : convertCel(day.temp.day)}
                <span>°{props.tempType}</span>
              </p>
              <p>
                Night:{' '}
                {props.tempType === 'F'
                  ? convertFah(day.temp.night)
                  : convertCel(day.temp.night)}
                <span>°{props.tempType}</span>
              </p>
              <p>Forecast: {day.weather[0].description}</p>
            </div>
          ))
          .slice(1)}
      </div>
    </>
  );
};

export default DailyForecast;
