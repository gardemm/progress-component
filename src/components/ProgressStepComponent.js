import React from 'react'
import styled from 'styled-components'
import {COLOR_ACTIVE, COLOR_DEFAULT} from "./ProgressConstants";

const ProgressStep = styled.div`
  position: absolute;
  left: -166%;
  bottom: -17px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100px;
`;

const Title = styled.div`
  color: ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT};
  font-size: 25px;
  text-align: center;
  padding-bottom: 24px;
  font-weight: bold;
`;

const StatusBar = styled.div`
  border: 10px solid ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT };
  border-radius: 50%;
  background-color: white;
  width: 25px;
  height: 25px; 
`;

export default (props) => {
  return (
    <ProgressStep>
      <Title complete={props.complete}>{props.title}</Title>
      <StatusBar complete={props.complete}/>
    </ProgressStep>
  )
}
