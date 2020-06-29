import React, { useState } from 'react';
import './styles/index.css';

const Temperature = (props) => {
  const { temp } = props.main;

  const [tempType, setTemp] = useState('F');

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
  return (
    <div className="temp-container">
      <div className="temp">
        {tempType === 'F' ? convertFah(temp) : convertCel(temp)}
        <span>°{tempType}</span>
      </div>
      <button className="toggle" onClick={toggle}>
        change to °{tempType === 'F' ? 'C' : 'F'}
      </button>
    </div>
  );
};

export default Temperature;
