import React, { useState } from "react";

const SimpleCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <section>
        <h1>Simple Counter</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
      </section>
    </>
  );
};

export default SimpleCounter;
