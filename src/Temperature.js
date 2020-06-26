import React, { useState } from 'react';
import './styles/index.css';

const Temperature = (props) => {
  const { temp } = props.main;

  const [tempType, setTemp] = useState('F');
  const [changeTemp, setNewTemp] = useState(temp);

  const convertCel = (currentTemp) => {
    return (currentTemp - 32) / 1.8;
  };

  const convertFah = (currentTemp) => {
    return currentTemp * 1.8 + 32;
  };

  const toggle = (tempToConvert) => {
    //if the previous state is F, change to Celsius
    if (tempType === 'F') {
      setNewTemp(convertCel(tempToConvert));
    } else {
      setNewTemp(convertFah(tempToConvert));
    }
    setTemp((prevState) => (prevState === 'F' ? 'C' : 'F'));
  };
  return (
    <div className="temp-container">
      <div className="temp">
        {Math.round(changeTemp)}
        <span>°{tempType}</span>
      </div>
      <button className="toggle" onClick={() => toggle(changeTemp)}>
        change to °{tempType === 'F' ? 'C' : 'F'}
      </button>
    </div>
  );
};

export default Temperature;
