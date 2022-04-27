import './App.css';
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-size: 2rem;
  font-weight: 600;
`;

function App() {
  return (
      <AppContainer>
        Hello, Web3 World!
      </AppContainer>
  );
}

export default App;
