import React, { useRef, useEffect } from 'react';
import './styles/index.css';
import rain from './SVG/rain.svg';
import clouds from './SVG/clouds.svg';
import lightShowers from './SVG/lightShowers.svg';
import snow from './SVG/snow.svg';
import sun from './SVG/sun.svg';
import thunder from './SVG/thunder.svg';
import wind from './SVG/wind.svg';

import { gsap } from 'gsap';

const WeatherIcon = (props) => {
  const { weather } = props.currentWeather;
  let conditions = weather[0].main;

  const getWeatherIcon = (conditions) => {
    switch (conditions) {
      case 'Clouds':
        return clouds;
      case 'Thunderstorm':
        return thunder;
      case 'Drizzle':
        return lightShowers;
      case 'Rain':
        return rain;
      case 'Snow':
        return snow;
      case 'Clear':
        return sun;
      default:
        return wind;
    }
  };

  let imgRef = useRef(null);
  useEffect(() => {
    gsap.from(imgRef, {
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.out',
    });
  }, []);

  return (
    <>
      <img
        src={getWeatherIcon(conditions)}
        alt="current weather icon"
        className="weather-icon"
        ref={(element) => {
          imgRef = element;
        }}
      ></img>
    </>
  );
};

export default WeatherIcon;
