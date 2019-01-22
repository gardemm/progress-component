import React from 'react'
import styled from 'styled-components'

const COLOR_ACTIVE = '#5132da';

const StatusBar = styled.div`
  border: 10px solid ${COLOR_ACTIVE};
  border-radius: 50%;
  background-color: white;
  width: 30px;
  height: 30px; 
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${COLOR_ACTIVE};
  font-size: 20px;
  
`;

export default () => {
  return (
    <ProgressStep>
      <Title>Name</Title>
      <StatusBar />
    </ProgressStep>
  )
}
