import React, { useState } from "react";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);

    setLoginDetails({
      username:"",
      password:""
    })
  };


  const handleChange=(e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
  }
  return (
    <div id="register-container">
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <h1>Login Page</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter email"
            required
            onChange={handleChange}
            value={loginDetails.username}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="admin@123"
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">Sign-In</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
    </div>
  );
};
