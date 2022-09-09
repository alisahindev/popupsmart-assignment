import { useEffect } from "react";
import Modal from "src/components/modal";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import style from "./index.module.css";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className={style.container}>{children}</main>;
};

export default Main;
