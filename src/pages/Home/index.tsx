import React from 'react';
import { CoffeeMenu } from './components/CoffeeMenu';
import { Intro } from './components/Intro';
import { HomeContainer } from './styles';

interface HomeProps {
  
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeMenu />
    </HomeContainer>
  );
};