import React from "react";
import style from "./index.module.css";

type LayoutProps = {
  // childrens are array
  children: React.ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.container}>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Layout;
