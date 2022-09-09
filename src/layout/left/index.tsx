import { MIN_ASIDE_WIDTH } from "src/utils/Constants";
import style from "./index.module.css";

type LeftAsideProps = {
  children: React.ReactNode;
  title: string;
};

const LeftAside = ({ title, children }: LeftAsideProps) => {
  return (
    <aside
      className={style.container}
      style={{
        minWidth: MIN_ASIDE_WIDTH,
      }}
    >
      <h1 className={style.title}>{title}</h1>
      {children}
    </aside>
  );
};

export default LeftAside;
