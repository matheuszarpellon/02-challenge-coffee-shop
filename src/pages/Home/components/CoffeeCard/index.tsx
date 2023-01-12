import { ShoppingCart } from 'phosphor-react';
import React, { useState } from 'react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { BaseRegularText, BaseTitle } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from './styles';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = formatMoney(coffee.price);
  const { addCoffeeToCart } = useCart();

  const handleIncrease = () => {
    setQuantity((state) => state + 1);
  }

  const handleDecrease = () => {
    setQuantity((state) => state - 1);
  }


  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <BaseRegularText size="s">R$</BaseRegularText>
          <BaseTitle size="m" color="text" as="strong">
            {formattedPrice}
          </BaseTitle>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
};