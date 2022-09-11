import React from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import Typography from "src/components/typography";
import style from "./index.module.css";
const NewStuff = () => {
  return (
    <div className={style.newStuffContainer}>
      <Typography text="NEW STAFF" variant="headline" />
      <Typography
        text="Sign up for our newsletter and get 15% off your first order!"
        variant="description"
        textStyle={{
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "31px",
        }}
      />
      <Input
        inputStyle={{
          marginLeft: "10px",
          marginRight: "10px",
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
