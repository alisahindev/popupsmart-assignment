import React from "react";
import style from "./index.module.css";

type TypographyProps = {
  text: string;
  variant: "headline" | "description" | "caption";
};

const Typography = ({ text, variant }: TypographyProps) => {
  return <p className={style[variant]}>{text}</p>;
};

export default Typography;
