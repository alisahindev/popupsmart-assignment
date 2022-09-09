import { useEffect } from "react";
import Modal from "src/components/modal";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import style from "./index.module.css";

const Main = () => {
  const { setModalOpen, isModalOpen }: IGlobal = useGlobalContext();

  useEffect(() => {
    setModalOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={style.container}>
      <Modal isOpen={isModalOpen} setIsOpen={setModalOpen}>
        asdfasfasf
      </Modal>
    </main>
  );
};

export default Main;
