import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {COLOR_ACTIVE, COLOR_DEFAULT} from "./PropgressContants";
import ProgressStepComponent from "./ProgressStepComponent";


const PADDING_SIZE = '100px';

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

const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${PADDING_SIZE} ${PADDING_SIZE} 0;  
`;

const LinkBettweenSteps = styled.div`
  width: 100px;
  height: 10px;
  background-color: ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT}
`;

const Step = styled.div`
  display: flex;
`;


const Point = styled.div`
  position: relative;
  width: 23px;
  background-color: black;
`;

const tasks = [
  {
    title: 'Protect',
    complete: true,
  },
  {
    title: 'Compile',
    complete: true,
  },
  {
    title: 'Discover',
    complete: false,
  },
  {
    title: 'Update',
    complete: false,
  },
  {
    title: 'Finish more results',
    complete: false,
  },
];

class ProgressComponent extends React.Component {

  render() {
    let steps = [];
    tasks.forEach((task, index) => {
      let linkBetweenSteps = null;
      if (index > 0) {
        linkBetweenSteps = <LinkBettweenSteps complete={task.complete}/>
      }
      steps.push(
        <Step key={index.toString()}>
          {linkBetweenSteps}
          <Point >
            <ProgressStepComponent
              title={task.title}
              complete={task.complete}
            />
          </Point>
        </Step>
      )
      }
    );

    return (
      <Progress>
        <GlobalStyle />
        {steps}
      </Progress>
    )
  }
}

export default ProgressComponent
