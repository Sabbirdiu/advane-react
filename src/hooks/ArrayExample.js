import React, { useState } from "react";
import { data } from "../data";
const ArrayExample = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newManosh = people.filter((removemanosh) => removemanosh.id !== id);
    setPeople(newManosh);
  };
  return (
    <>
      {people.map((manosh) => {
        const { id, name } = manosh;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem()}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Data
      </button>
    </>
  );
};
export default ArrayExample;
