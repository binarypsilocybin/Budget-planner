import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  return (
    <div className="alert alert-success">
      <span>Remaining: €1200</span>
    </div>
  );
};

export default Remaining;
