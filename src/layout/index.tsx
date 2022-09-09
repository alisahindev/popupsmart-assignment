import React from "react";
import LeftAside from "./left";
import Main from "./main";
import style from "./index.module.css";
import Input from "src/components/input";
import Modal from "src/components/modal";
import Typography from "src/components/typography";

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
