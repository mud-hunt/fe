import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import Auth from './components/Auth'



function App() {

  return (
    <Router>
      <Switch>
        <AppContainer>
        <MainDialog>
          <Route exact path="/" render={props => <Welcome {...props} />} />
          <Route exact path="/auth" render={props => <Auth {...props} />} />
        </MainDialog>
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  background: #ff7577;
  height:100vw;
`;

const MainDialog = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  width: 60%;
  max-width:900px;  
  min-width:400px;  
  padding-top:10vw;
  margin:0 auto;
  h1 {
    color:white;
    text-align:center;
  }
  @media (max-width: 500px) {
    padding-top:0vw;
    h1 {
      padding:10px;
    }
  }
`;