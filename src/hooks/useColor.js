import React, { useEffect, useState } from 'react';

function getRandomColor() {
   // Generate a random hex color code
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function useColor() {
   const [color, setColor] = useState('pink');

   useEffect(() => {
      const intervalRef = setInterval(() => {
         const newColor = getRandomColor();
         setColor(newColor);
      }, 2000);

      return () => {
         clearInterval(intervalRef);
      };
   }, []);

   return color;
}

export default useColor;
