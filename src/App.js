import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ProgressComponent from './components/ProgressComponent'

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
`


function App() {
    return (
        <div>
            <GlobalStyle />
            <ProgressComponent />
        </div>
    )
}

export default App
