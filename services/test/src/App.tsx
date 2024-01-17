import styled from "@emotion/styled";
import { vars } from "@miirmoon/themes";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return <View />;
}

export default App;

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>font color is {vars.colors.$scale.blue[500]}</Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const Text = styled.p`
  color: ${vars.colors.$scale.blue[500]};
`;
