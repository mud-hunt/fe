import React, { useState } from "react";
import {
  registrationHandler,
  loginHandler
} from "../authHandlers/authHandlers";
import { toast } from "react-toastify";

const Auth = props => {
  const [action, setAction] = useState("register");

  const [state, updateState] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    event.preventDefault();
    updateState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const toggleStyle = event => {
    event.preventDefault();
    document.getElementById("login").classList.toggle("blur");
    document.getElementById("register").classList.toggle("blur");
    setAction(event.target.id);
  };

  const onSubmit = event => {
    event.preventDefault();

    const registrationCredentials = {
      username: state.username,
      email: state.email,
      password1: state.password1,
      password2: state.password2
    };

    const loginCredentials = {
      username: state.username,
      password: state.password1
    };
    if (action === "register") {
      registrationHandler(registrationCredentials);
      toast.success("Registration successful");
    } else if (action === "login") {
      loginHandler(loginCredentials);
    }
  };

  return (
    <>
      <div className="row center">
        <h2>Before you play</h2>
      </div>
      <div className="row center">
        <h3 id="register" onClick={toggleStyle} className="title-choice">
          Register
        </h3>
        <h3>|</h3>
        <h3 id="login" onClick={toggleStyle} className="title-choice blur">
          Login
        </h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row center">
          <input
            type="text"
            placeholder="Your user name"
            name="username"
            className="half"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="row center">
          {action === "register" && (
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              className="half"
              value={state.email}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="row center"></div>
        <div className="row center">
          <input
            type="password"
            placeholder="Password"
            name="password1"
            className="half"
            value={state.password1}
            onChange={handleChange}
          />
        </div>
        <div className="row center">
          {action === "register" && (
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              className="half"
              value={state.password2}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="row center">
          {action === "register" && <button className="big">SUBMIT</button>}
        </div>
        <div className="row center">
          {action === "login" && <button className="big">LOGIN</button>}
        </div>
      </form>
    </>
  );
};

export default Auth;
