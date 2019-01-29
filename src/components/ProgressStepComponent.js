import React from 'react'
import styled from 'styled-components'
import {COLOR_ACTIVE, COLOR_DEFAULT} from "./PropgressContants";

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const Title = styled.div`
  color: ${props => props.complete ? COLOR_ACTIVE : COLOR_DEFAULT};
  font-size: 20px;
  
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
