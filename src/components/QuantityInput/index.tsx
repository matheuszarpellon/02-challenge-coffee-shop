import { Minus, Plus } from 'phosphor-react';
import React from 'react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({ onIncrease, onDecrease, quantity, size = "medium", }) => {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
};