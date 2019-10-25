import React from "react";
import styled from "styled-components";
import compass from "../assets/compass-2.png";
import Map from "../components/Map";
import { getToken } from "../helpers/getToken";
import { Redirect } from "react-router-dom"

const HuntApp = () => {
  if(!getToken()){
    return <Redirect to="/auth" />
  }
  return (
    <>
      <h2>Start the hunt</h2>
      <div className="row">
        <Map />
        <SideBar>
          <Card>
            <CardTitle>
              <h3>Room 12</h3>
            </CardTitle>
            <CardContent>
              <h4>Player Name</h4>
              <p>Instriction to player</p>
              <h4>Items</h4>
              <p>Listing of itens in this Room</p>
              <h4>Current players</h4>
              <p>Info and data </p>
            </CardContent>
            <CardFooter>
              <Direction>
                <h4>N</h4>
              </Direction>
              <Direction>
                <h4>S</h4>
              </Direction>
              <Direction>
                <h4>E</h4>
              </Direction>
              <Direction>
                <h4>W</h4>
              </Direction>
              <Compass>
                <img src={compass} />
              </Compass>
            </CardFooter>
          </Card>
        </SideBar>
      </div>
    </>
  );
};

export default HuntApp;

const RoomsMap = styled.div`
  border: 1px solid white;
  width: 70%;
  height: auto;
  margin-left: 20px;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 25%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  margin: 10px;
`;

const CardTitle = styled.div`
  background:white h3 {
    color: #ff7577;
  }
`;

const CardContent = styled.div`
  color: white;
  padding-left: 5px;
  h4 {
    text-align: left;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background:white h3 {
    color: #ff7577;
  }
`;

const Direction = styled.div`
  width: 15%;
  background: white;
  text-align: center;
  h4 {
    color: #ff7577;
  }
`;

const Compass = styled.div`
  width: 20%;
  text-align: right;
  margin: 10px;
  img {
    opacity: 0.8;
  }
`;


