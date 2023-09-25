import React, { useState } from "react";

const StateExample=() => {
  const [count, setCount] = useState(0);
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h>State Example</h>
      <h2>Counter: {count}</h2>
      <button onClick={handleDecrease}>Decreaser</button>
      <button onClick={handleIncrease}>Increaser</button>
    </div>
  );
};
export default StateExample; 