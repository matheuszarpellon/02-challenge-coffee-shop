import React, { ReactNode } from 'react';
import { IconContainer, InfoContainer } from './styles';

interface InfoProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export const Info: React.FC<InfoProps> = ({ icon, text, iconBg }) => {
  return (
    <InfoContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoContainer>
  );
};