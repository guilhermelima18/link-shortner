import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return <input type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
