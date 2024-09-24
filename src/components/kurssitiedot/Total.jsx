import React from "react";

const Total = ({ exercises }) => {
  const total = exercises.reduce((sum, exercises) => sum + exercises, 0);
  return <p>Number of exercises {total}</p>;
};

export default Total;
