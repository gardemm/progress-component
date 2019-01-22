import React from 'react'
import ProgressStepComponent from './ProgressStepComponent'
import styled from 'styled-components'

const Progress = styled.div`
  display: flex;
  width: 100%;
`;

function ProgressComponent () {
  return (
    <Progress>
      <ProgressStepComponent/>
      <ProgressStepComponent/>
      <ProgressStepComponent/>
    </Progress>
  )
}

export default ProgressComponent
