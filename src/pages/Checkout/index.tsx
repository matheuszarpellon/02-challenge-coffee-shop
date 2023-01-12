import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as zod from "zod";
import { checkoutFormValidationSchema } from '../../data/schema';
import { useCart } from "../../hooks/useCart";
import { CheckoutForm } from './components/CheckoutForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

interface CheckoutProps {

}

export type CheckoutData = zod.infer<typeof checkoutFormValidationSchema>;

type CheckoutFormData = CheckoutData;

export const Checkout: React.FC<CheckoutProps> = () => {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = checkoutForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  const handleConfirmCheckout = (data: CheckoutFormData) => {
    navigate("/success", {
      state: data,
    });
    cleanCart();
  }
  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer className='container' onSubmit={handleSubmit(handleConfirmCheckout)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
};