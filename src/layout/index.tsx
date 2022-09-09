import React from "react";
import LeftAside from "./left";
import Main from "./main";
import style from "./index.module.css";
import Input from "src/components/input";

const Layout = () => {
  const [formValues, setFormValues] = React.useState<any>({});
  const [formErrors, setFormErrors] = React.useState<any>({});

  const handleErrors = (name: string, error: string) => {
    setFormErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    const { name, value } = e.currentTarget;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));

    // check if the input is empty
    if (value === "") {
      handleErrors(name, "This field is required");
    } else {
      handleErrors(name, "");
    }
  };

  return (
    <div className={style.container}>
      <LeftAside title='General Settings'>
        <Input
          placeholder='Search'
          type='text'
          onChange={handleInputChanges}
          label='Headline'
          name='headline'
          value={formValues.headline || ""}
          errorText={formErrors.headline}
        />
        <Input
          placeholder='Search'
          type='text'
          onChange={handleInputChanges}
          label='Description'
          isTextArea
          name='description'
          value={formValues.description || ""}
          errorText={formErrors.description}
        />
        <Input
          placeholder='Success'
          type='text'
          onChange={handleInputChanges}
          label='Success Message'
          name='success'
          value={formValues.success || ""}
          errorText={formErrors.success}
        />
      </LeftAside>
      <Main />
    </div>
  );
};

export default Layout;
