import React, { useState, useContext } from "react";
import { data } from "../data";
const PersonContext = React.createContext();
const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h3>Context Api</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  const { removeItem } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove person</button>
    </div>
  );
};

export default ContextApi;
