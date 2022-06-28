import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUser] = useState([]);

  const loadUser = async () => {
    // console.log('before');
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="nul">
          <li>XYZ Company</li>
          <li>
            <button onClick={loadUser}>Get Users</button>
          </li>
        </ul>
      </nav>
      <h1>Users:</h1>
      <ul className="users">
        {users.map(({ id, login,avatar_url }) => (
          <li className="user" key={id}>
            <div>Username: {login}</div>
            <div>avatar url: {avatar_url}</div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

