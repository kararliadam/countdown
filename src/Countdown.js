import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, eventTitle }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {Object.keys(timeLeft).length > 0 ? (
        <div>
          <h1>{eventTitle}</h1>
          <div>{timeLeft.days} gün {timeLeft.hours} saat {timeLeft.minutes} dakika {timeLeft.seconds} saniye</div>
        </div>
      ) : (
        <h1>Time's up!</h1>
      )}
    </div>
  );
};

export default Countdown;