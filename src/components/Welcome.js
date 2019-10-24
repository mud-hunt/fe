import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../helpers/getToken";

const Welcome = () => {
  return (
    <>
      <div className="row">
        <h1>Welcome to Mud-Hunt</h1>
      </div>
      <div className="row center">
        {getToken() ? (
          <Link to="/hunt">
            <button className="big">LETS PLAY</button>
          </Link>
        ) : (
          <Link to="/auth">
            <button className="big">AUTHORIZE</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Welcome;
