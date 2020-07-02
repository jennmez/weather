import React from 'react';
import './styles/index.css';
import { timeConverter } from './utilities';

const DailyForecast = (props) => {
  console.log(props);

  return (
    <div className="dailys">
      <div>
        {props.daily.map((day, i) => (
          <div key={i}>
            <div>{timeConverter(day.dt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
