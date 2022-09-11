import React from "react";
import style from "./index.module.css";

type TypographyProps = {
  text: string;
  variant: "headline" | "description" | "caption";
  textStyle?: React.CSSProperties;
};

const Typography = ({ text, variant, textStyle }: TypographyProps) => {
  return (
    <p className={style[variant]} style={textStyle}>
      {text}
    </p>
  );
};

export default Typography;
