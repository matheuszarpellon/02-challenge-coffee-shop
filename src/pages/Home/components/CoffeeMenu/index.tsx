import React from 'react';
import { BaseTitle } from '../../../../components/Typography';
import { coffees } from '../../../../data/coffees';
import { CoffeeCard } from '../CoffeeCard';
import { CoffeeList, CoffeeMenuContainer } from './styles';

interface CoffeeMenuProps {

}

export const CoffeeMenu: React.FC<CoffeeMenuProps> = () => {
  return (
    <CoffeeMenuContainer className='container'>
      <BaseTitle size="xl" color="subtitle">
        Nossos cafés
        <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
      </BaseTitle>
    </CoffeeMenuContainer>
  );
};