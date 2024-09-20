const athleteName = 'Nala';  // Avoid using 'name'

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = sportEvent => {  // Avoid using 'event'
  let days;
  if (sportEvent === 'Marathon') {
    days = 50;
  } else if (sportEvent === 'Triathlon') {
    days = 100;
  } else if (sportEvent === 'Pentathlon') {
    days = 200;
  }
  return days;
};

const logEvent = (athleteName, sportEvent) => {
  console.log(`${athleteName}'s event is: ${sportEvent}`);
};

const logTime = (athleteName, days) => {
  console.log(`${athleteName}'s time to train is: ${days} days`);
};

const sportEvent = getRandEvent();
const days = getTrainingDays(sportEvent);

logEvent(athleteName, sportEvent);
logTime(athleteName, days);