import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

/*
Number of steps is dynamic
There's a minimum step of two and a maximum of five
You can't jump over a step
Write a simple test to check if the state has changed after click
* */

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
})
