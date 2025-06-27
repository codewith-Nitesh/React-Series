import React from "react";
import { useState } from "react";

const Profile = (props) => {
  const { name, address, location } = props;
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ border: "1px solid black", margin: "1rem" }}>
        <h1>Function Based component</h1>
        <h3>Name:{name}</h3>
        <h3>Address:{address}</h3>
        <h3>location:{location}</h3>
        <h3>Email:choudharynitesh692@gmail.com</h3>
        <h3>count:{count}</h3>
        <button
        style={{padding:'0.3rem', margin:'0.2rem'}}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increment
        </button>
      </div>
    </>
  );
};

export default Profile;
