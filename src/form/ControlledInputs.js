import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email && age) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
        age,
      };
      setPeople((peopleAdd) => {
        return [...peopleAdd, person];
      });
      setfirstName("");
      setEmail("");
      setAge("");
    } else {
      console.log("empty value");
    }
    console.log(firstName, email, age);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((personList) => {
          const { id, firstName, email, age } = personList;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
