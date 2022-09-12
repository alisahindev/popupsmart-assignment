import React, { useEffect } from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import Typography from "src/components/typography";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import { handleInputChanges } from "src/utils/HandleInputChanges";
import style from "./index.module.css";

type NewStuffProps = {
  handleNext: () => void;
};

const NewStuff = ({ handleNext }: NewStuffProps) => {
  const { formData, setFormData, isError }: IGlobal = useGlobalContext();

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleInputChanges(e, formData, setFormData);
  };

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return (
    <div className={style.newStuffContainer}>
      <Typography
        textStyle={{
          textTransform: "uppercase",
        }}
        text={formData.headline?.value}
        variant='headline'
      />
      <Typography
        text={formData.description?.value}
        variant='description'
        textStyle={{
          margin: "0 30px 31px",
        }}
      />
      <Input
        inputStyle={{
          margin: "0 10px",
        }}
        isCustomer
        placeholder='Your Name'
        type='text'
        name='name'
        required
        onChange={handleChanges}
        value={formData.name?.value || ""}
        errorText={formData.name?.error}
      />
      <Input
        inputStyle={{
          margin: "0 10px",
        }}
        isCustomer
        placeholder='Email'
        type='email'
        name='email'
        required
        onChange={handleChanges}
        value={formData.email?.value || ""}
        errorText={formData.email?.error}
      />
      <Input
        inputStyle={{
          margin: "0 10px",
        }}
        isCustomer
        placeholder='Select Font'
        type='text'
        name='fonts'
        required
        onChange={handleChanges}
        value={formData.fonts?.value || ""}
        errorText={formData.fonts?.error}
      />
      <Button
        buttonStyle={{
          margin: "20px 10px 0",
        }}
        fullWidth
        isUpperCase
        onClick={handleNext}
        type='submit'
        disabled={isError}
      >
        get my 30% OFF
      </Button>
    </div>
  );
};

export default NewStuff;
