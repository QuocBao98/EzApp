import React, { useEffect, useState } from 'react';

useClock.propTypes = {};

function formatTimeString(date) {
   const hour = `0${date.getHours()}`.slice(-2);
   const minute = `0${date.getMinutes()}`.slice(-2);
   const second = `0${date.getSeconds()}`.slice(-2);

   return `${hour}:${minute}:${second}`;
}

function useClock() {
   const [timeString, setTimeString] = useState('');

   useEffect(() => {
      const clockInterval = setInterval(() => {
         const now = new Date();
         const formatTime = formatTimeString(now);

         setTimeString(formatTime);
      }, 1000);

      return () => {
         console.log('clean up');
         clearInterval(clockInterval);
      };
   }, []);

   return { timeString };
}

export default useClock;
