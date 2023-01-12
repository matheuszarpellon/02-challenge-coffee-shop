import { ConfirmationSectionContainer } from "./styles";
import { BaseRegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <BaseRegularText size="s">Total de itens</BaseRegularText>
        <BaseRegularText>R$ {formattedItemsTotal}</BaseRegularText>
      </div>
      <div>
        <BaseRegularText size="s">Entrega</BaseRegularText>
        <BaseRegularText>R$ {formattedDeliveryPrice}</BaseRegularText>
      </div>
      <div>
        <BaseRegularText weight="bold" color="subtitle" size="l">
          Total
        </BaseRegularText>
        <BaseRegularText weight="bold" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </BaseRegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity  <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
