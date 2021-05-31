import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sabbir",
    age: 25,
    message: "industry is not everything",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello message" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage}> change msg </button>
    </>
  );
};

export default UseStateObject;
