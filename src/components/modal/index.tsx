import React from "react";
import style from "./index.module.css";
import closeIcon from "src/assets/svgs/close.svg";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  isClosable?: boolean;
};

const Modal = ({ isOpen, children, isClosable, setIsOpen }: ModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  return (
    <dialog ref={dialogRef} open={isOpen} className={style.container}>
      {!isClosable && (
        <button onClick={() => setIsOpen(false)} className={style.close}>
          <img src={closeIcon} alt='Close' />
        </button>
      )}
      <div className={style.body}>{children}</div>
    </dialog>
  );
};

export default Modal;
