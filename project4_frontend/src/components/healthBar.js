import React from "react";

const HealthBar = props => {
  return (
    <div className="healthbar" style={{ width: `${props.percentage}%` }} />
  );
};

export default HealthBar;
