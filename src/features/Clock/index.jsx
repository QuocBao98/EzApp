import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

function Clock() {
   const { timeString } = useClock();
   return (
      <div>
         <p style={{ fontSize: '50px' }} className="clock">
            {timeString}
         </p>
      </div>
   );
}

export default Clock;
