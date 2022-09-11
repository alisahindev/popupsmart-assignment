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
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
  isCustomer?: boolean;
  inputStyle?: React.CSSProperties;
  required?: boolean;
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
  isCustomer,
  inputStyle,
  required,
}: InputProps) => {
  return (
    <span className={isCustomer ? style.customerContainer : style.container}>
      {label && (
        <label className={style.label} htmlFor={name}>
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={name}
          className={style.input}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
          rows={5}
          style={{ resize: "none" }}
          name={name}
        />
      ) : (
        <input
          id={name}
          type={type}
          required
          placeholder={placeholder}
          className={isCustomer ? style.isCustomer : style.input}
          onChange={onChange}
          value={value}
          name={name}
          style={inputStyle}
        />
      )}
      {errorText && required && (
        <span className={style.errorText}>
          <ErrorSvg width={15} />
          {errorText}
        </span>
      )}
    </span>
  );
};
export default Input;
