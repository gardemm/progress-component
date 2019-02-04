import React, {Fragment} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  COLOR_ACTIVE,
  COLOR_DEFAULT,
  LINK_BETTWEEN_STEPS_HEIGHT,
  LINK_BETTWEEN_STEPS_WIDTH,
  PROGRESS_WRAPPER_PADDING_SIZE,
  POINT_HEIGHT,
  POINT_WIDTH
} from "./ProgressConstants";
import ProgressStepComponent from "./ProgressStepComponent";
import tasks from './tasks';

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
  padding: ${PROGRESS_WRAPPER_PADDING_SIZE} ${PROGRESS_WRAPPER_PADDING_SIZE} 0;  
`;

const LinkBettweenSteps = styled.div`
  width: ${LINK_BETTWEEN_STEPS_WIDTH};
  height: ${LINK_BETTWEEN_STEPS_HEIGHT};
  background-color: ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT}
`;

const Point = styled.div`
  position: relative;
  width: ${POINT_WIDTH};
  height: ${POINT_HEIGHT};
`;

class ProgressComponent extends React.Component {

  render() {
    let steps = [];
    tasks.forEach((task, index) => {
      let linkBetweenSteps = null;
      if (index > 0) {
        linkBetweenSteps = <LinkBettweenSteps complete={task.complete}/>
      }
      steps.push(
        <Fragment key={index.toString()}>
          {linkBetweenSteps}
          <Point >
            <ProgressStepComponent
              title={task.title}
              complete={task.complete}
            />
          </Point>
        </Fragment>
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
