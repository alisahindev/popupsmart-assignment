import React from "react";
import Input from "src/components/input";
import Typography from "src/components/typography";
import style from "./index.module.css";
const NewStuff = () => {
  return (
    <div className={style.newStuffContainer}>
      <Typography text='NEW STAFF' variant='headline' />
      <Typography
        text='Sign up for our newsletter and get 15% off your first order!'
        variant='description'
      />
      <Input placeholder='Search' type='text' name='headline' />
      <Input placeholder='Search' type='text' isTextArea name='description' />
      <Input placeholder='Success' type='text' name='success' />
    </div>
  );
};

export default NewStuff;
