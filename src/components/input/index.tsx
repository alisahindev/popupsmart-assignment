import React from "react";
import ErrorSvg from "../svgs/error";
import style from "./index.module.css";

type InputProps = {
  placeholder: string;
  type?: string;
  label?: string;
  errorText?: string;
  value?: string;
  isTextArea?: boolean;
  // onChange will be a function but it will check if the event is a text area or not
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
};

const Input = ({
  placeholder,
  type,
  onChange,
  label,
  errorText,
  value,
  isTextArea,
  name,
}: InputProps) => {
  return (
    <span className={style.container}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          className={style.input}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={5}
          // close resize
          style={{ resize: "none" }}
          name={name}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={style.input}
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
      {errorText && (
        <span className={style.errorText}>
          <ErrorSvg width={15} />
          {errorText}
        </span>
      )}
    </span>
  );
};
export default Input;
