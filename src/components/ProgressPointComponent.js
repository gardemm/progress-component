import React from 'react'
import styled from 'styled-components'
import {
    POINT_HEIGHT, POINT_WIDTH,
} from '../constants/components/progressConstants'
import ProgressPointStepComponent from './ProgressPointStepComponent'


const Point = styled.div`
  position: relative;
  width: ${POINT_WIDTH};
  height: ${POINT_HEIGHT};
`


export default ({
    task, onClick,
}) => (
    <Point>
        <ProgressPointStepComponent onClick={onClick} task={task} />
    </Point>
)
