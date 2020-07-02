import React, { useState, useRef, useEffect, useMemo } from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import sunriseIcon from './SVG/sunrise.svg';
import sunsetIcon from './SVG/sunset.svg';
import gsap from 'gsap';

const Temperature = (props) => {
  const {
    sunrise,
    sunset,
    temp,
    feels_like,
    humidity,
    wind_speed,
  } = props.current;

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

  let divRef = useRef(0);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  //not working, need to research more
  useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: 'power1.out',
      duration: 0.7,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    if (showInfo) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [showInfo]);

  return (
    <>
      <div className="weather-container">
        <div className="weather-pic">
          <WeatherIcon currentWeather={props.current}></WeatherIcon>
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
          {showInfo === false ? (
            <h2>Show me more details</h2>
          ) : (
            <h2>Hide these details</h2>
          )}
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
            <div className="highs-lows" ref={(element) => (divRef = element)}>
              <p>
                Feels Like:{' '}
                {tempType === 'F'
                  ? convertFah(feels_like)
                  : convertCel(feels_like) === 'C'}
                <span>°{tempType}</span>
              </p>
              <p>Humidity: {humidity}%</p>
              <p>Wind Speed: {wind_speed} metre/sec</p>
              <div className="sunrise-container">
                <img className="icon" src={sunriseIcon} alt="sunrise icon" />
                <div className="sunrise-content">{timeConverter(sunrise)}</div>
                <img className="icon" src={sunsetIcon} alt="sunset icon" />
                <div className="sunrise-content">{timeConverter(sunset)}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temperature;
