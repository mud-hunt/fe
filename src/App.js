import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth";
import HuntApp from "./views/HuntApp";

function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <MainDialog>
            <Route exact path="/" render={props => <Welcome {...props} />} />
            <Route path="/auth" render={props => <Auth {...props} />} />
          </MainDialog>
          <Route exact path="/hunt" render={props => <HuntApp {...props} />} />
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`;

const MainDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 60%;
  max-width: 900px;
  min-width: 400px;
  padding-top: 10vh;
  margin: 0 auto;
  h1 {
    color: white;
  }
  @media (max-width: 500px) {
    padding-top: 10vw;
    min-width: 100%;
  }
`;

