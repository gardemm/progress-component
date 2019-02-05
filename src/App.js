import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createGlobalStyle } from 'styled-components'
import rootReducer from './reducers'
import ProgressContainer from './containers/ProgressContainer'


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


const store = createStore(rootReducer)

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ProgressContainer />
        </Provider>
    )
}

export default App
