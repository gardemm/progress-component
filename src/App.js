import React from "react";
import ProgressComponent from "./components/ProgressComponent";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
  }
  
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


class App extends React.Component {
  render () {
    return (
      <div>
        <GlobalStyle />
        <ProgressComponent />
      </div>)
  }
}

export default App
