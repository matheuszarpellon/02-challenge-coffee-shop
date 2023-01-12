import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Money, Bank } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";
import { BaseRegularText } from "../../../../components/Typography";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

interface PaymentMethodOptionsProps {

}

export const PaymentMethodOptions: React.FC<PaymentMethodOptionsProps> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <BaseRegularText>{paymentMethodError}</BaseRegularText>}
    </PaymentMethodOptionsContainer>
  );
}
