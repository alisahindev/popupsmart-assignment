import React from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import Typography from "src/components/typography";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import style from "./index.module.css";
const NewStuff = () => {
  const { formData }: IGlobal = useGlobalContext();

  return (
    <div className={style.newStuffContainer}>
      <Typography text={formData.headline} variant="headline" />
      <Typography
        text={formData.description}
        variant="description"
        textStyle={{
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "31px",
        }}
      />
      <Input
        inputStyle={{
          margin: "0 10px",
        }}
        isCustomer
        placeholder="Your Name"
        type="text"
        name="headline"
      />
      <Input
        inputStyle={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
        isCustomer
        placeholder="Email"
        type="text"
        name="headline"
      />
      <Input
        inputStyle={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
        isCustomer
        placeholder="Select Font"
        type="text"
        name="headline"
      />
      <Button
        buttonStyle={{
          margin: "20px 10px 0",
        }}
        fullWidth
        isUpperCase
      >
        get my 30% OFF
      </Button>
    </div>
  );
};

export default NewStuff;
