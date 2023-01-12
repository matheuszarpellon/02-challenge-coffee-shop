import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from './styles';

interface DefaultLayoutProps {

}

export const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};