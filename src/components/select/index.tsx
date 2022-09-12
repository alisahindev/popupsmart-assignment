import React, { useEffect } from "react";
import ArrawDown from "../svgs/arrow";
import style from "./index.module.css";

type SelectProps = {
  options: string[];
  value: string;
  name: string;
  onChange: (value: string) => void;
  inputStyle?: React.CSSProperties;
  placeholder?: string;
  required?: boolean;
};

const Select = ({
  options,
  value,
  onChange,
  name,
  inputStyle,
  required,
  placeholder,
}: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mutationOptions, setMutationOptions] = React.useState(options);
  const [searchValue, setSearchValue] = React.useState(value);

  useEffect(() => {
    setMutationOptions(options);
  }, [options]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    const value = e.target.value;
    setSearchValue(value);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setMutationOptions(filteredOptions);
  };

  useEffect(() => {
    if (value) {
      setSelectedIndex(options.indexOf(value));
    }
  }, [value]);

  // Geliştirilmesi gereken çok şey var --
  // keyboard eventler yapılacak

  return (
    <div className={style.container}>
      <div className={style.inputContainer} style={inputStyle}>
        <input
          className={style.input}
          type='text'
          name={name}
          value={searchValue}
          onChange={handleChange}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          required={required}
        />
        <ArrawDown
          width={24}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <ul
        style={inputStyle}
        className={`${style.dropdown} ${isOpen ? style.open : ""}`}
      >
        {mutationOptions.map((item, i) => {
          return (
            <li
              key={item}
              className={`${style.option} ${
                selectedIndex === i ? style.selected : ""
              }`}
              onClick={() => {
                onChange(item);
                setSelectedIndex(i);
                setSearchValue(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
