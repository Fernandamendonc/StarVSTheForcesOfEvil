import React from 'react';

import { Container, Header, Content } from './style';

import { Input } from '../../components/input';
import { Card } from '../../components/Card';

import bannerImg from '../../assets/cover.png';

export function Home(){
  return(
    <Container>
      <Header source={ bannerImg }>
        <Input placeholder='Pesquisar...'/>
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  )
}