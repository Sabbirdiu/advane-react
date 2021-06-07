import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";
const UseEffectsFetchApi = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const gitUsers = await response.json();
    setUsers(gitUsers);
    console.log(gitUsers);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href="{html_url}">Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectsFetchApi;