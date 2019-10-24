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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  h1 {
    color: white;
  }
  @media (max-width: 500px) {
    padding-top: 10rem;
    min-width: 100%;
  }
`;

const MainDialog = styled.div`
`;
