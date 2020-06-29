import React from 'react';
import './styles/index.css';
import rain from './SVG/rain.svg';
import clouds from './SVG/clouds.svg';
import lightShowers from './SVG/lightShowers.svg';
import snow from './SVG/snow.svg';
import sun from './SVG/sun.svg';
import thunder from './SVG/thunder.svg';
import wind from './SVG/wind.svg';

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

  return (
    <>
      <img src={getWeatherIcon(conditions)} alt="current weather icon"></img>
    </>
  );
};

export default WeatherIcon;
