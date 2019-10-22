import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <MainDialog>
        <div className="row">
          <h1>Welcome to <br/>Mud-Hunt</h1>
        </div>
        <div className="row to-the-right">
          <button>LETS PLAY</button>
        </div>      
      </MainDialog>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: #ff7577;
  height:100vw;
`;

const MainDialog = styled.div`
  width: 60%;
  padding-top:20vw;
  margin:0 auto;
  h1 {
    color:white;
  }
`;