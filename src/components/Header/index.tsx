import { MapPin, ShoppingCart } from 'phosphor-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import coffeeLogo from "../../assets/coffee-delivery-logo.svg";
import { useCart } from '../../hooks/useCart';
import { ButtonsContainer, HeaderButton, HeaderContainer } from './styles';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogo} alt="coffe delivery" />
        </NavLink>
        <ButtonsContainer>
          <HeaderButton variant='purple'><MapPin size={20} weight="fill" />São José do Rio Preto</HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant='yellow'>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
};