import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}
