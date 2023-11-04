import React, { useEffect, useRef, useState } from 'react';

CountRef.propTypes = {};

function CountRef() {
   const [count, setCount] = useState(0);
   const prevCount = useRef(count);

   useEffect(() => {
      prevCount.current = count;
   }, [count]);

   function handleIncrease() {
      setCount(count + 1);
   }

   return (
      <div>
         <p>previous : {prevCount.current}</p>
         <p>Current : {count}</p>
         <button className="increase" onClick={handleIncrease}>
            Increase
         </button>
      </div>
   );
}

export default CountRef;
