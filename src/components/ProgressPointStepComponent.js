import React from 'react'
import styled from 'styled-components'
import {
    COLOR_ACTIVE,
    COLOR_DEFAULT,
    LINK_BETTWEEN_STEPS_WIDTH,
    STATUS_CIRCLE_WIDTH,
    TITLE_FONT_SIZE,
    TITLE_PADDING_BOTTOM,
} from '../constants/components/progressConstants'


const ProgressStep = styled.div`
  position: absolute;
  left: -166%;
  bottom: -17px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: ${LINK_BETTWEEN_STEPS_WIDTH};
  cursor: pointer;
`

const Title = styled.div`
  color: ${props => (props.complete ? COLOR_ACTIVE : COLOR_DEFAULT)};
  font-size: ${TITLE_FONT_SIZE};
  text-align: center;
  padding-bottom: ${TITLE_PADDING_BOTTOM};
  font-weight: bold;
`

const StatusCircle = styled.div`
  border: 10px solid ${props => (props.complete ? COLOR_ACTIVE : COLOR_DEFAULT)};
  border-radius: 50%;
  background-color: white;
  width: ${STATUS_CIRCLE_WIDTH};
  height: ${STATUS_CIRCLE_WIDTH}; 
`


export default ({
    task, onClick,
}) => (
    <ProgressStep className="progress-step" onClick={onClick(task.id)}>
        <Title complete={task.complete}>{task.title}</Title>
        <StatusCircle complete={task.complete} />
    </ProgressStep>

)
