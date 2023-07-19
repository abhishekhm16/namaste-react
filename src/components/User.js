import React from "react";
import { useState } from "react";

function User(props) {
  const { name, location, contact } = props;
  let [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        count increase
      </button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
}

export default User;
