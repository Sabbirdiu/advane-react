import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("sabbir");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState(
    "initialState industry is not everything"
  );
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello message" });
    setMessage("Change the message");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button onClick={changeMessage} className="btn">
        {" "}
        change msg{" "}
      </button>
    </>
  );
};

export default UseStateObject;
