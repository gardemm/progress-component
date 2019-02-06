import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
    COLOR_ACTIVE,
    COLOR_DEFAULT,
    LINK_BETTWEEN_STEPS_HEIGHT,
    LINK_BETTWEEN_STEPS_WIDTH,
    PROGRESS_WRAPPER_PADDING_SIZE,
} from '../constants/components/progressConstants'
import ProgressStepComponent from './ProgressStepComponent'


const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${PROGRESS_WRAPPER_PADDING_SIZE} ${PROGRESS_WRAPPER_PADDING_SIZE} 0;  
`

const LinkBettweenSteps = styled.div`
  width: ${LINK_BETTWEEN_STEPS_WIDTH};
  height: ${LINK_BETTWEEN_STEPS_HEIGHT};
  background-color: ${props => (props.complete ? COLOR_ACTIVE : COLOR_DEFAULT)}
`


function ProgressComponent({ tasks, onClick }) {
    const steps = []
    tasks.forEach((task, index) => {
        const linkBetweenSteps = (index > 0)
            ? <LinkBettweenSteps complete={task.complete} /> : null
        steps.push(
            <Fragment key={index.toString()}>
                {linkBetweenSteps}
                <ProgressStepComponent
                    task={task}
                    onClick={onClick}
                />
            </Fragment>,
        )
    })

    return (
        <Progress>
            {steps}
        </Progress>
    )
}


export default ProgressComponent
