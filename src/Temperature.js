import React, { useState } from 'react';
import './styles/index.css';

const Temperature = (props) => {
  const { temp } = props.main;

  const [tempType, setTemp] = useState('F');
  // const [changeTemp, setNewTemp] = useState(temp);

  const convertCel = (currentTemp) => {
    let converted = currentTemp - 273.15;
    return Math.round(converted);
  };

  const convertFah = (currentTemp) => {
    let converted = currentTemp * 1.8 - 459.67;
    return Math.round(converted);
  };

  const toggle = () => {
    //if the previous state is F, change to Celsius
    // if (tempType === 'F') {
    //   setNewTemp(convertCel(tempToConvert));
    // } else {
    //   setNewTemp(convertFah(tempToConvert));
    // }
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };
  return (
    <div className="temp-container">
      <div className="temp">
        {tempType === 'F' ? convertFah(temp) : convertCel(temp)}
        <span>°{tempType}</span>
      </div>
      <button className="toggle" onClick={toggle}>
        change to °F
      </button>
      <button className="toggle" onClick={toggle}>
        change to °C
      </button>
    </div>
  );
};

export default Temperature;
