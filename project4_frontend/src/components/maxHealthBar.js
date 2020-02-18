import React from 'react'
import HealthBar from "./healthBar";

const MaxHealthBar = props => {
  return (
    <div className="maxhealthbar">
      <HealthBar percentage={props.percentage}/>
    </div>
  );
};

export default MaxHealthBar;