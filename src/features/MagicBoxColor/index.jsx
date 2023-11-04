import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useColor from '../../hooks/useColor';

function MagicColorBox(props) {
   const color = useColor();

   return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
         <div
            style={{
               backgroundColor: color,
               width: '100px',
               height: '100px',
            }}
         ></div>
      </div>
   );
}

export default MagicColorBox;
