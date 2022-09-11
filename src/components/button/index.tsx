import React from "react";
import style from "./index.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  isUpperCase?: boolean;
  buttonStyle?: React.CSSProperties;
};

const Button = ({
  children,
  onClick,
  fullWidth = false,
  isUpperCase = false,
  buttonStyle,
}: ButtonProps) => {
  return (
    <button
      className={style.container}
      style={{
        width: fullWidth ? "-webkit-fill-available" : "initial",
        textTransform: isUpperCase ? "uppercase" : "initial",
        ...buttonStyle,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
