import React from 'react'
import styled from 'styled-components'
import {
    COLOR_ACTIVE,
    COLOR_DEFAULT,
    LINK_BETTWEEN_STEPS_WIDTH, POINT_HEIGHT, POINT_WIDTH,
    STATUS_CIRCLE_WIDTH,
    TITLE_FONT_SIZE,
    TITLE_PADDING_BOTTOM,
} from './ProgressConstants'


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

const Point = styled.div`
  position: relative;
  width: ${POINT_WIDTH};
  height: ${POINT_HEIGHT};
`


export default ({ complete, title }) => (
    <Point>
        <ProgressStep>
            <Title complete={complete}>{title}</Title>
            <StatusCircle complete={complete} />
        </ProgressStep>
    </Point>
)
