import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { Info } from "../../components/Info";
import { BaseRegularText, BaseTitle } from "../../components/Typography";
import { CheckoutData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

interface LocationType {
  state: CheckoutData;
}

interface OrderConfirmedProps {

}

export const OrderConfirmedPage: React.FC<OrderConfirmedProps> = () => {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <BaseTitle size="l">Uhu! Pedido confirmado</BaseTitle>
        <BaseRegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </BaseRegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <Info
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <BaseRegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </BaseRegularText>
            }
          />

          <Info
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <BaseRegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </BaseRegularText>
            }
          />

          <Info
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <BaseRegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </BaseRegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  );
}
