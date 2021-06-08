import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "../data";
const Index = () => {
  const reducer = (state, action) => {};
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((newPeople) => {
        return (
          <div key={newPeople.id}>
            <h4>{newPeople.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
