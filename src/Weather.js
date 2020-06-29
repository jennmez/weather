import React from 'react';
import './styles/index.css';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';
import MoreInfo from './MoreInfo';

const Weather = (props) => {
  const { weather } = props;
  const { main, sys, dt, wind } = weather;

  const timeConverter = (dt) => {
    const dayTimeAccessed = new Date(dt * 1000);

    // const timeInZone = dayTimeAccessed.toLocaleTimeString(undefined, {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = dayTimeAccessed.getFullYear();
    const month = months[dayTimeAccessed.getMonth()];
    const date = dayTimeAccessed.getDate();
    const day = days[dayTimeAccessed.getDay()];
    const time = `${day}, ${month} ${date}, ${year}`;
    return time;
  };

  return (
    <div className="main">
      {typeof main != 'undefined' ? (
        <>
          <div className="date-time">{timeConverter(dt)}</div>
          <div className="location">
            {weather.name}, {sys.country}
          </div>
          <div className="weather-type">
            Today's forecast is: {weather.weather[0].main}
          </div>
          <Temperature
            main={main}
            currentWeather={weather}
            sys={sys}
            wind={wind}
          ></Temperature>
        </>
      ) : (
        <>
          <div className="location">
            Enter the name of a city to see the current forecast.
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
