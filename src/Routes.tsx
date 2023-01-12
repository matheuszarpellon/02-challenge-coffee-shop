import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { OrderConfirmedPage } from './pages/OrderConfirmed';

interface RoutesProps {

}

export const Router: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
};