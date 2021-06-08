import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
// import { data } from "../data";
const Index = () => {
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
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          <div className="item" key={newPeople.id}>
            <h4>{newPeople.name}</h4>
            <button
              type="submit"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: newPeople.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
