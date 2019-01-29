import React from 'react'
import ProgressStepComponent from './ProgressStepComponent'
import styled from 'styled-components'
import {COLOR_ACTIVE, COLOR_DEFAULT} from "./PropgressContants";

const Progress = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  justify-content: space-between;
`;

const LinkBettweenSteps = styled.div`
  width: auto;
  height: 10px;
  flex: 1;
  background-color: ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT}
`;

const Step = styled.div`
  display: flex;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const tasks = [
  {
    title: 'Design',
    complete: true,
  },
  {
    title: 'Build',
    complete: false,
  },
  {
    title: 'Launch',
    complete: false,
  },
];

class ProgressComponent extends React.Component {

  render() {
    let steps = [];
    let linksBetweenSteps = [];
    tasks.forEach((task, index) => {
      if (index > 0) {
        linksBetweenSteps.push(<LinkBettweenSteps complete={task.complete}/>)
      }
      steps.push(
        <Step key={index.toString()}>
          <ProgressStepComponent
            title={task.title}
            complete={task.complete}
          />
        </Step>
      )
      }
    );

    return (
      <Progress>
        <Background>
          {linksBetweenSteps}
        </Background>
        {steps}
      </Progress>
    )
  }
}

export default ProgressComponent
