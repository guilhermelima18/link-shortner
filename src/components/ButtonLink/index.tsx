import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const ButtonLink = ({ buttonText, ...rest }: ButtonProps) => {
  return <button {...rest}>{buttonText}</button>;
};

export default ButtonLink;
