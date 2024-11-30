import React, { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button onClick={toggle} style={{ backgroundColor: isOn ? 'green' : 'red'}}>
      {isOn ? ' ONd ' : ' OFF '}
      <FaCoffee style={{ marginRight: '5px' }} /> Check server
    </button>

   
   );
};

export default ToggleButton;