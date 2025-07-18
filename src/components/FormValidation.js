import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const myFunction = (e) => {
  //     e.preventDefault()
  //     console.log(e.target.value)
  // }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //      console.log("Email", email);
  //      console.log("password", password);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Email", email);
    // console.log("password", password);
    console.log(formData);
  };

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div style={{ padding: "1.2rem" }}>
        Hy this is the form validation group
      </div>
      <div>
        {/* <form
          // action="https://www.google.com"
          style={{
            border: "1px solid black",
            height: "200px",
            width: "400px",
            margin: "auto",
            padding: "1rem",
            display:'flex',
            flexDirection:'column',
            gap:'1rem'
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "90%",
              height: "35%",
              margin: "auto auto",
              padding: "0.3rem",
            }}
          />
           <input
            type="password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "90%",
              height: "35%",
              margin: "auto auto",
              padding: "0.3rem",
            }}
          />
          <button type="submit" target='blank' onClick={handleSubmit} style={{height:'2rem', padding:'0.2rem'}}>Submit</button>
        </form> */}

        <form
          // action="https://www.google.com"
          style={{
            border: "1px solid black",
            height: "200px",
            width: "400px",
            margin: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="email"
            value={formData.email}
            onChange={changeHandle}
            name="email"
            style={{
              width: "90%",
              height: "35%",
              margin: "auto auto",
              padding: "0.3rem",
            }}
          />
          <input
            type="password"
            value={formData.password}
            onChange={changeHandle}
            name="password"
            style={{
              width: "90%",
              height: "35%",
              margin: "auto auto",
              padding: "0.3rem",
            }}
          />
          <button
            type="submit"
            target="blank"
            onClick={handleSubmit}
            style={{ height: "2rem", padding: "0.2rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
