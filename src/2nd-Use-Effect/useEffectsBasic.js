import React, { useState, useEffect } from "react";

const UseEffectsBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 2) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  return (
    <div>
      <h1>UseEffect Basic</h1>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        click
      </button>
    </div>
  );
};

export default UseEffectsBasic;
