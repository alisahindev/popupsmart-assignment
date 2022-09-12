import React, { useEffect } from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import Select from "src/components/select";
import Typography from "src/components/typography";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import { API_URL } from "src/utils/Constants";
import { handleInputChanges } from "src/utils/HandleInputChanges";
import style from "./index.module.css";

type NewStuffProps = {
  handleNext: () => void;
  hasError: boolean;
};

const NewStuff = ({ handleNext, hasError }: NewStuffProps) => {
  const { formData, setFormData }: IGlobal = useGlobalContext();
  const [options, setOptions] = React.useState<any[]>([]);
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleInputChanges(e, formData, setFormData);
  };

  const getOptions = () => {
    // use fetch https://apiv2.popupsmart.com/api/googlefont
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // filter without monospace fonts
        const filteredData = data.filter((item: any) => {
          return item.category !== "monospace";
        });

        // option filled with family name and sorting a-z
        const _options = filteredData
          .map((item: any) => {
            return item.family;
          })
          .sort((a: any, b: any) => {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          });
        setOptions(_options);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOptions();
  }, []);

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
      <Select
        inputStyle={{
          margin: "10px 10px 0",
        }}
        required
        name='category'
        options={options}
        value={formData.category?.value || ""}
        onChange={(value) => {
          setFormData({
            ...formData,
            category: {
              value,
              error: "",
            },
          });
        }}
        placeholder='Category'
      />
      <Button
        buttonStyle={{
          margin: "20px 10px 0",
        }}
        fullWidth
        isUpperCase
        onClick={handleNext}
        type='submit'
        disabled={hasError}
      >
        get my 30% OFF
      </Button>
    </div>
  );
};

export default NewStuff;
