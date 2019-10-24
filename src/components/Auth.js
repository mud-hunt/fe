import React, { useState } from "react";
import {
  registrationHandler,
  loginHandler
} from "../authHandlers/authHandlers";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getToken } from "../helpers/getToken";
import styled from "styled-components";

const Auth = props => {
  const [action, setAction] = useState("register");

  const [state, updateState] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    hasToken: getToken()
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

  const onSubmit = async event => {
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
      try {
        const response = await registrationHandler(registrationCredentials);
        if (response && response.status === 201) {
          toast.success("Registration successful");
          updateState({ hasToken: true });
        } else {
          toast.error("Registration failed");
        }
      } catch (err) {
      }
    } else if (action === "login") {
      try {
        const response = await loginHandler(loginCredentials);
        if (response && response.status === 200) {
          toast.success("Login successful");
          updateState({ hasToken: true });
        } else {
          toast.error("Invalid credentials");
        }
      } catch (err) {
      }
    }
  };

  if (state.hasToken) {
    return <Redirect to="/hunt" />;
  }
  return (
    <>
      <div className="row center">
        <StyledToastContainer />
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

const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    background-color: green;
    color: White;
    top: 0;
    .Toastify__toast {
      border-radius: 4px;
    }
  }
`;

export default Auth;
