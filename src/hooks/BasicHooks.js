import React, { useState } from "react";

const BasicHooks = () => {
  const [text, setText] = useState("title");
  const handleClicker = () => {
    if (text === "title") {
      setText("change the title");
    } else {
      setText("title");
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClicker}>
        Click here
      </button>
    </div>
  );
};

export default BasicHooks;
