import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { getToken } from "../helpers/getToken";

const Welcome = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Welcome;
