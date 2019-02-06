import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { createGlobalStyle } from 'styled-components'
import thunk from 'redux-thunk'
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

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
))

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ProgressContainer />
        </Provider>
    )
}

export default App
