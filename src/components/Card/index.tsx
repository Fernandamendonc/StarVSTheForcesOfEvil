import React from 'react';

import { Container, Image, Title, Fundation } from './style';
import unitedImg from '../../assets/united.png'

export function Card() {
  return (
    <Container
    animation="slideInDown"
    duration={2000}
    >
      <Image 
        source={ unitedImg } 
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title>Manchester United</Title>
      <Fundation>1878</Fundation>
    </Container>
  );
}