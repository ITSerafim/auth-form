import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleClasses: string;
  children?: JSX.Element;
}

function Button({ text, styleClasses, children, ...props }: ButtonProps) {
  return (
    <button className={styleClasses} {...props}>
      {children}
      {text}
    </button>
  );
}

export default Button;
