import React, { useState, useRef, useEffect, useMemo } from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
// import sunriseIcon from './SVG/sunrise.svg';
// import sunsetIcon from './SVG/sunset.svg';
// import gsap from 'gsap';
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

  const [tempType, setTemp] = useState('F');
  // const [showInfo, setInfo] = useState(false);

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

  // const display = () => {
  //   setInfo((prevState) => (prevState === false ? true : false));
  // };

  // let divRef = useRef(0);
  // const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  // //not working, need to research more
  // useEffect(() => {
  //   timeline.from(divRef.current.childNodes, {
  //     y: 100,
  //     opacity: 0,
  //     ease: 'power1.out',
  //     duration: 0.7,
  //     stagger: 0.1,
  //   });
  // }, []);

  // useEffect(() => {
  //   if (showInfo) {
  //     timeline.play();
  //   } else {
  //     timeline.reverse();
  //   }
  // }, [showInfo]);

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
            {tempType === 'F' ? convertFah(temp) : convertCel(temp)}
            <span>°{tempType}</span>
          </div>
          <button className="toggle" onClick={toggle}>
            change to °{tempType === 'F' ? 'C' : 'F'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Temperature;
