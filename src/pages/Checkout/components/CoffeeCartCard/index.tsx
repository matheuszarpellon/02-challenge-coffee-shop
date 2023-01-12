import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { BaseRegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export const CoffeeCartCard: React.FC<CoffeeCartCardProps> = ({ coffee }) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const handleIncrease = () => {
    changeCartItemQuantity(coffee.id, "increase");
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  const handleRemove = () => {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <BaseRegularText color="subtitle">{coffee.name}</BaseRegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
