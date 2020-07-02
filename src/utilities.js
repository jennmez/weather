export const timeConverter = (dt) => {
  const dayTimeAccessed = new Date(dt * 1000);

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

export const convertCel = (currentTemp) => {
  let converted = currentTemp - 273.15;
  return Math.round(converted);
};

export const convertFah = (currentTemp) => {
  let converted = currentTemp * 1.8 - 459.67;
  return Math.round(converted);
};
